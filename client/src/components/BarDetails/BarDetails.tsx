import type React from "react";
import { useEffect, useState } from "react";
import { barService } from "../../services/barService";
import type { Bar } from "../../types/bar";
import "../../assets/_variables.css";
import "./BarDetails.css";

interface BarDetailsProps {
  barId: number;
}

const BarDetails: React.FC<BarDetailsProps> = ({ barId }) => {
  const [bar, setBar] = useState<Bar | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  useEffect(() => {
    const fetchBarData = async () => {
      try {
        setLoading(true);
        const barData = await barService.getBarById(barId);
        setBar(barData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBarData();
  }, [barId]);

  const formatHours = (hours: string) => {
    if (hours === "Fermé" || hours === "Closed") {
      return "Fermé";
    }

    if (hours.includes("-")) {
      const parts = hours.split("-");
      if (parts.length === 2) {
        const openTime = parts[0];
        const closeTime = parts[1];
        return `Ouvre à ${openTime}. Ferme à ${closeTime}.`;
      }
    }

    return hours;
  };

  const formatHappyHours = (happyHours: string) => {
    if (!happyHours || happyHours === "Aucune" || happyHours === "None") {
      return null;
    }

    if (happyHours.includes("-")) {
      const parts = happyHours.split("-");
      if (parts.length === 2) {
        const startTime = parts[0];
        const endTime = parts[1];
        return `Happy Hours commence à ${startTime}, fini à ${endTime}.`;
      }
    }

    return `Happy Hours: ${happyHours}`;
  };

  const getTodayHours = () => {
    if (!bar || !bar.hours) {
      return "Non spécifié";
    }

    const today = new Date().getDay();
    let todayHours = "";

    if (today === 0) todayHours = bar.hours.sunday_opening_hours;
    else if (today === 1) todayHours = bar.hours.monday_opening_hours;
    else if (today === 2) todayHours = bar.hours.tuesday_opening_hours;
    else if (today === 3) todayHours = bar.hours.wednesday_opening_hours;
    else if (today === 4) todayHours = bar.hours.thursday_opening_hours;
    else if (today === 5) todayHours = bar.hours.friday_opening_hours;
    else if (today === 6) todayHours = bar.hours.saturday_opening_hours;

    return formatHours(todayHours);
  };

  const nextImage = () => {
    if (bar) {
      const images = [bar.image1, bar.image2, bar.image3, bar.image4];
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      } else {
        setCurrentImageIndex(0);
      }
    }
  };

  const prevImage = () => {
    if (bar) {
      const images = [bar.image1, bar.image2, bar.image3, bar.image4];
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      } else {
        setCurrentImageIndex(images.length - 1);
      }
    }
  };

  const openModal = (imageIndex: number) => {
    setModalImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModalImage = () => {
    if (bar) {
      const images = [bar.image1, bar.image2, bar.image3, bar.image4];
      if (modalImageIndex < images.length - 1) {
        setModalImageIndex(modalImageIndex + 1);
      } else {
        setModalImageIndex(0);
      }
    }
  };

  const prevModalImage = () => {
    if (bar) {
      const images = [bar.image1, bar.image2, bar.image3, bar.image4];
      if (modalImageIndex > 0) {
        setModalImageIndex(modalImageIndex - 1);
      } else {
        setModalImageIndex(images.length - 1);
      }
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isModalOpen) {
        if (e.key === "Escape") {
          setIsModalOpen(false);
        } else if (e.key === "ArrowLeft") {
          if (bar) {
            const images = [bar.image1, bar.image2, bar.image3, bar.image4];
            if (modalImageIndex > 0) {
              setModalImageIndex(modalImageIndex - 1);
            } else {
              setModalImageIndex(images.length - 1);
            }
          }
        } else if (e.key === "ArrowRight") {
          if (bar) {
            const images = [bar.image1, bar.image2, bar.image3, bar.image4];
            if (modalImageIndex < images.length - 1) {
              setModalImageIndex(modalImageIndex + 1);
            } else {
              setModalImageIndex(0);
            }
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isModalOpen, modalImageIndex, bar]);

  if (loading) return <div className="loading">Chargement...</div>;
  if (error) return <div className="error">Erreur: {error}</div>;
  if (!bar) return <div className="error">Bar non trouvé</div>;

  const images = [bar.image1, bar.image2, bar.image3, bar.image4];

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
            {bar.hours?.happy_hours &&
              formatHappyHours(bar.hours.happy_hours) && (
                <div className="happy-hours">
                  🍻 {formatHappyHours(bar.hours.happy_hours)}
                </div>
              )}
          </div>
        </div>
      </section>

      <section className="events-carousel">
        <div className="no-events">
          <h3>Événements</h3>
          <p>Les événements seront bientôt disponibles.</p>
        </div>
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
