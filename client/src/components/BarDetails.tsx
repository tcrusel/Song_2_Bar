import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { barService } from "../services/barService";
import type { Bar, Event } from "../types/bar";
import "./BarDetails.css";

interface BarDetailsProps {
  barId: number;
}

const BarDetails: React.FC<BarDetailsProps> = ({ barId }) => {
  const [bar, setBar] = useState<Bar | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchBarData = async () => {
      try {
        setLoading(true);
        const [barData, barEvents] = await Promise.all([
          barService.getBarById(barId),
          barService.getBarEvents(barId),
        ]);

        setBar(barData);
        setEvents(barEvents);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBarData();
  }, [barId]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const formatHours = (hours: string) => {
    if (hours === "Fermé" || hours === "Closed") return "Fermé";
    return hours;
  };

  const getTodayHours = () => {
    if (!bar?.hours) return "Non spécifié";

    const today = new Date().getDay();
    const daysOfWeek = [
      "sunday_opening_hours",
      "monday_opening_hours",
      "tuesday_opening_hours",
      "wednesday_opening_hours",
      "thursday_opening_hours",
      "friday_opening_hours",
      "saturday_opening_hours",
    ];

    const todayHours = bar.hours[daysOfWeek[today] as keyof typeof bar.hours];
    return formatHours(todayHours as string);
  };

  const nextImage = () => {
    if (bar) {
      const images = [bar.image1, bar.image2, bar.image3, bar.image4];
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (bar) {
      const images = [bar.image1, bar.image2, bar.image3, bar.image4];
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length,
      );
    }
  };

  const nextEvents = () => {
    const step = isMobile ? 1 : 5;
    setCurrentEventIndex((prev) =>
      prev + step >= events.length ? 0 : prev + step,
    );
  };

  const prevEvents = () => {
    const step = isMobile ? 1 : 5;
    setCurrentEventIndex((prev) =>
      prev - step < 0 ? Math.max(0, events.length - step) : prev - step,
    );
  };

  const openModal = (imageIndex: number) => {
    setModalImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const nextModalImage = useCallback(() => {
    if (bar) {
      const images = [bar.image1, bar.image2, bar.image3, bar.image4];
      setModalImageIndex((prev) => (prev + 1) % images.length);
    }
  }, [bar]);

  const prevModalImage = useCallback(() => {
    if (bar) {
      const images = [bar.image1, bar.image2, bar.image3, bar.image4];
      setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [bar]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === "Escape") {
          closeModal();
        } else if (e.key === "ArrowLeft") {
          prevModalImage();
        } else if (e.key === "ArrowRight") {
          nextModalImage();
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isModalOpen, closeModal, prevModalImage, nextModalImage]);

  if (loading) return <div className="loading">Chargement...</div>;
  if (error) return <div className="error">Erreur: {error}</div>;
  if (!bar) return <div className="error">Bar non trouvé</div>;

  const images = [bar.image1, bar.image2, bar.image3, bar.image4];
  const cardsToShow = isMobile ? 1 : 5;
  const visibleEvents = events.slice(
    currentEventIndex,
    currentEventIndex + cardsToShow,
  );

  return (
    <div className="bar-details">
      <div className="return-button-container">
        <button type="button" className="return-button" onClick={() => {}}>
          ← Retour
        </button>
      </div>

      <div className="bar-name-banner">
        <h1 className="bar-name">{bar.name}</h1>
      </div>

      <section className="bar-info">
        <div className="image-gallery">
          <div className="main-image">
            <img
              src={images[currentImageIndex]}
              alt={bar.name}
              onClick={() => openModal(currentImageIndex)}
              onKeyDown={(e) =>
                e.key === "Enter" && openModal(currentImageIndex)
              }
              style={{ cursor: "pointer" }}
            />
            <button
              type="button"
              className="nav-button prev"
              onClick={prevImage}
            >
              ‹
            </button>
            <button
              type="button"
              className="nav-button next"
              onClick={nextImage}
            >
              ›
            </button>
          </div>
          <div className="thumbnail-grid">
            {images.slice(0, 3).map((img, index) => (
              <img
                key={`${bar.name}-${index}`}
                src={img}
                alt={`${bar.name} ${index + 1}`}
                className={index === currentImageIndex ? "active" : ""}
                onClick={() => openModal(index)}
                onKeyDown={(e) => e.key === "Enter" && openModal(index)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </div>
        </div>

        <div className="bar-details-content">
          <div className="bar-meta">
            <div className="location">
              📍 {bar.address}, {bar.postcode} {bar.city}
            </div>
            <div className="music-style">🎵 {bar.music_style}</div>
            <div className="hours">🕐 {getTodayHours()}</div>
            {bar.hours?.happy_hours && (
              <div className="happy-hours">🍻 {bar.hours.happy_hours}</div>
            )}
          </div>
        </div>
      </section>

      <section className="events-carousel">
        {events.length > 0 ? (
          <>
            <div className="carousel-controls">
              <button
                type="button"
                className="carousel-nav"
                onClick={prevEvents}
              >
                ‹
              </button>
              <button
                type="button"
                className="carousel-nav"
                onClick={nextEvents}
              >
                ›
              </button>
            </div>

            <div className="events-grid">
              {visibleEvents.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-image">
                    <div className="placeholder-image">🎵</div>
                  </div>
                  <div className="event-info">
                    <h3 className="event-title">
                      {event.music_group?.name || event.title}
                    </h3>
                    <p className="event-style">{event.music_group?.style}</p>
                    <div className="event-meta">
                      <span className="event-date">
                        {new Date(event.date).toLocaleDateString("fr-FR")}
                      </span>
                      <span className="event-time">{event.start_at}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {events.length > cardsToShow && (
              <div className="carousel-dots">
                {Array.from({
                  length: Math.ceil(events.length / cardsToShow),
                }).map((_, index) => (
                  <button
                    key={`carousel-dot-${bar.id}-${index}`}
                    type="button"
                    className={`dot ${Math.floor(currentEventIndex / cardsToShow) === index ? "active" : ""}`}
                    onClick={() => setCurrentEventIndex(index * cardsToShow)}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="no-events">
            <h3>Aucun événement programmé</h3>
            <p>Ce bar n'a pas d'événements prévus pour le moment.</p>
          </div>
        )}
      </section>

      {isModalOpen && (
        <div
          className="image-modal-overlay"
          onClick={closeModal}
          onKeyDown={(e) => e.key === "Escape" && closeModal()}
        >
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <button type="button" className="modal-close" onClick={closeModal}>
              ×
            </button>
            <img
              src={images[modalImageIndex]}
              alt={bar.name}
              className="modal-image"
            />
            <button
              type="button"
              className="modal-nav-button modal-prev"
              onClick={prevModalImage}
            >
              ‹
            </button>
            <button
              type="button"
              className="modal-nav-button modal-next"
              onClick={nextModalImage}
            >
              ›
            </button>
            <div className="modal-counter">
              {modalImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BarDetails;
