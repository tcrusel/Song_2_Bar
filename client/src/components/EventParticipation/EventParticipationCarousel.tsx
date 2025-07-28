import { useEffect, useRef, useState } from "react";
import "./EventParticipationCarousel.css";
import { useAuth } from "../../contexts/AuthContext";
import type { EventType } from "../../types/Event";
import EventCard from "../EventCard/EventCard";

function EventParticipationCarousel() {
  const [participations, setParticipations] = useState<EventType[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { auth } = useAuth();
  const cardsPerPage = 5;
  const cardWidth = 160;
  const gap = 24;
  const [participantsCount, setParticipantsCount] = useState<
    Record<number, number>
  >({});

  const totalPages = Math.ceil(participations.length / cardsPerPage);

  useEffect(() => {
    const fetchParticipations = async () => {
      if (!auth) return;

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/participate`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth.token}`,
            },
          },
        );

        if (!response.ok)
          throw new Error("Erreur lors du chargement des participations");

        const data = await response.json();
        setParticipations(data);

        
        const counts: Record<number, number> = {};
        await Promise.all(
          data.map(async (event: EventType) => {
            try {
              const res = await fetch(
                `${import.meta.env.VITE_API_URL}/api/${event.id}/participants/count`,
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

  const scrollToPage = (pageIndex: number) => {
    if (carouselRef.current) {
      const scrollPosition = pageIndex * cardsPerPage * (cardWidth + gap);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentPage(pageIndex);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) scrollToPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) scrollToPage(currentPage + 1);
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const newPage = Math.round(
        scrollLeft / ((cardWidth + gap) * cardsPerPage),
      );
      setCurrentPage(Math.min(newPage, totalPages - 1));
    }
  };

  if (participations.length === 0) {
    return <p>Vous ne participez à aucun événement.</p>;
  }

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Mes Événements</h2>
      <button
        type="button"
        className="carousel-arrow left"
        onClick={goToPreviousPage}
        disabled={currentPage === 0}
      >
        ‹
      </button>
      <div className="carousel-wrapper">
        <div
          className="groups-carousel"
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {participations
            .slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)
            .map((event) => (
              <EventCard key={event.id} event={event} participantsCount={participantsCount[event.id] ?? 0} />
            ))}
        </div>
      </div>
      <button
        type="button"
        className="carousel-arrow right"
        onClick={goToNextPage}
        disabled={currentPage === totalPages - 1}
      >
        ›
      </button>
      {totalPages > 1 && (
        <div className="carousel-dots">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              type="button"
              key={`dot-${index}`}
              className={`carousel-dot ${index === currentPage ? "active" : ""}`}
              onClick={() => scrollToPage(index)}
            />
          ))}
        </div>
      )}
      ’
    </div>
  );
}

export default EventParticipationCarousel;
