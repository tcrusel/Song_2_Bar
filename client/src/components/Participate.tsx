import { useState } from "react";
import type { ParticipateProps } from "../types/Participate";
import "./Participate.css";

function Participate({ eventId, userId }: ParticipateProps) {
  const [isParticipated, setIsParticipated] = useState(false);
  const [isPopuped, setIsPopuped] = useState(false);

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

      const result = await response.json();
      console.log(result);

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
          !isParticipated && addParticipate();
          setIsPopuped(true);
          setTimeout(() => setIsPopuped(false), 3000);
        }}
      >
        {isParticipated ? "Je ne participe plus" : "Je participe"}
      </button>
      {isPopuped && (
        <div className="popup">
          {isParticipated
            ? "Vous participez à cet évènement"
            : " Vous ne participez plus à cet évènement"}
        </div>
      )}
    </>
  );
}

export default Participate;
