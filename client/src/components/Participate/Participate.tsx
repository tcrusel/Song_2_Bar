import { useState } from "react";
import type { ParticipateProps } from "../../types/Participate";
import "./Participate.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Participate({ eventId, userId }: ParticipateProps) {
  const [isParticipated, setIsParticipated] = useState(false);

  const addParticipate = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/participate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            eventId,
            userId,
          }),
        },
      );
      await response.json();
      setIsParticipated(true);
    } catch (error) {
      console.error("Erreur lors de la participation à cet évènement", error);
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
                theme: "colored",
                autoClose: 2000,
              })
            : toast("Vous participez à cet évènement", {
                type: "success",
                theme: "colored",
                autoClose: 2000,
              }) && addParticipate();
        }}
      >
        {isParticipated ? "Je ne participe plus" : "Je participe"}
      </button>
      <ToastContainer limit={2} />
    </>
  );
}

export default Participate;
