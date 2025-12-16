import { useEffect, useState } from "react";
import "./Participate.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router";
import type { ParticipateProps } from "@/types/Participate";
import { useAuth } from "@/contexts/AuthContext";
import { URL } from "@/config/api";

function Participate({ onParticipationChange }: ParticipateProps) {
  const [isParticipated, setIsParticipated] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();
  const userId = auth?.user.id;
  const eventId = Number(id);

  useEffect(() => {
    const checkParticipation = async () => {
      if (!auth) return;
      try {
        const response = await fetch(`${URL}/api/participate/${eventId}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        if (response.ok) {
          const result = await response.json();
          setIsParticipated(result.participates);
        } else {
          console.error("Erreur lors de la récupération de la participation");
        }
      } catch (error) {
        console.error("Erreur réseau :", error);
      }
    };

    if (userId && eventId) {
      checkParticipation();
    }
  }, [userId, eventId, auth]);

  const addParticipation = async () => {
    if (!auth) {
      navigate("/login", { state: { islogged: false } });
      return false;
    }

    try {
      const response = await fetch(`${URL}/api/participate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify({
          userId,
          eventId,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur serveur");
      }

      setIsParticipated(true);
      onParticipationChange?.(true);
      toast.success("Vous participez à cet évènement", {
        type: "success",
      });
      return true;
    } catch (error) {
      console.error("Erreur lors de la participation à cet évènement", error);
      toast("Erreur lors de l'inscription à l'évènement", { type: "error" });
      return false;
    }
  };

  const deleteParticipation = async () => {
    if (!auth) {
      navigate("/login", { state: { islogged: false } });
      return false;
    }
    try {
      const response = await fetch(`${URL}/api/participate/${eventId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression de la participation");
      }

      setIsParticipated(false);
      onParticipationChange?.(false);
      toast("Vous ne participez plus à cet évènement", {
        type: "success",
      });
      return true;
    } catch {
      console.error("Erreur lors de la participation à cet évènement", Error);
      return false;
    }
  };

  return (
    <>
      <ToastContainer
        theme="colored"
        position="top-right"
        limit={2}
        autoClose={3000}
      />
      <button
        className="participate-button"
        type="button"
        onClick={async () => {
          if (!isParticipated) {
            await addParticipation();
          } else {
            await deleteParticipation();
          }
        }}
      >
        {isParticipated ? "Je ne participe plus" : "Je participe"}
      </button>
    </>
  );
}

export default Participate;
