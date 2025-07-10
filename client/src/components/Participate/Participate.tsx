import { useState } from "react";
import "./Participate.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

function Participate() {
  const [isParticipated, setIsParticipated] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams();

  const userId = auth?.user.id;
  const eventId = Number(id);

  const addParticipate = async () => {
    if (!auth || !userId) {
      toast("Veuillez vous connecter pour participer", { type: "warning" });
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/participate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
          body: JSON.stringify({
            eventId,
            userId,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Erreur serveur");
      }

      setIsParticipated(true);
    } catch (error) {
      console.error("Erreur lors de la participation à cet évènement", error);
      toast("Erreur lors de l'inscription à l'évènement", { type: "error" });
      throw error;
    }
  };

  return (
    <>
      <button
        className="participate-button"
        type="button"
        onClick={() => {
          setIsParticipated(!isParticipated);
          isParticipated
            ? toast("Vous ne participez plus à cet évènement", {
                type: "info",
              })
            : toast("Vous participez à cet évènement", {
                type: "success",
              }) && addParticipate();
        }}
      >
        {isParticipated ? "Je ne participe plus" : "Je participe"}
      </button>
      <ToastContainer
        position="top-center"
        theme="colored"
        autoClose={2000}
        limit={2}
      />
    </>
  );
}

export default Participate;
