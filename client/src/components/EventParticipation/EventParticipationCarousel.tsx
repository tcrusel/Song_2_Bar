import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import type { EventType } from "@/types/Event";
import EventCard from "../EventCard/EventCard";
import { URL } from "@/config/api";

function EventParticipationCarousel() {
  const [participations, setParticipations] = useState<EventType[]>([]);
  const [participantsCount, setParticipantsCount] = useState<
    Record<number, number>
  >({});
  const carouselRef = useRef<HTMLDivElement>(null);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchParticipations = async () => {
      if (!auth) return;

      try {
        const response = await fetch(`${URL}/api/participate`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Erreur lors du chargement des participations");
        }

        const data = await response.json();
        setParticipations(data);

        const counts: Record<number, number> = {};
        await Promise.all(
          data.map(async (event: EventType) => {
            try {
              const res = await fetch(
                `${URL}/api/${event.id}/participants/count`,
              );
              const countData = await res.json();
              counts[event.id] = countData.participantsCount ?? 0;
            } catch (error) {
              console.error(
                "Erreur lors du fetch participants pour l'événement",
                event.id,
              );
              counts[event.id] = 0;
            }
          }),
        );
        setParticipantsCount(counts);
      } catch (err) {
        console.error(err);
      }
    };

    fetchParticipations();
  }, [auth]);

  const scrollByAmount = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.5;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!Array.isArray(participations) || participations.length === 0) {
    return <h3>Vous ne participez à aucun événement</h3>;
  }

  return (
    <section className="user-favorites">
      <h2 className="carousel-title">Mes participations</h2>
      <article className="carousel-container">
        <button
          type="button"
          className="carousel-arrow left"
          onClick={() => scrollByAmount("left")}
        >
          ‹
        </button>

        <div className="carousel-wrapper">
          <div className="groups-carousel" ref={carouselRef}>
            {participations.map((event) => (
              <div key={event.id} className="carousel-card">
                <EventCard
                  event={event}
                  participantsCount={participantsCount[event.id] ?? 0}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="carousel-arrow right"
          onClick={() => scrollByAmount("right")}
        >
          ›
        </button>
      </article>
    </section>
  );
}

export default EventParticipationCarousel;
