import { useState } from "react";

interface ParticipateProps {
  eventId: number;
  userId: number;
}

function Participate({ eventId, userId }: ParticipateProps) {
  const [isParticipated, setIsParticipated] = useState(false);

  const addParticipate = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/participate`,
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
        type="button"
        onClick={() => {
          isParticipated ? "Je ne participe plus" : "Je participe";
          !isParticipated && addParticipate;
          setIsParticipated(!isParticipated);
        }}
      >
        Je participe
      </button>
    </>
  );
}

export default Participate;
