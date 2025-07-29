import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import BarCard from "../BarCard/BarCard";
import type { Bar } from "../../types/bar";

function BarsFavourited() {
  const [barsFavourited, setBarsFavourited] = useState<Bar[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchBarsFavourited = async () => {
      if (!auth) return;

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/favourite_bar`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth.token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Erreur lors du chargement des bars en favoris");
        }

        const barsFavorited = await response.json();
        setBarsFavourited(barsFavorited);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBarsFavourited();
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

  if (barsFavourited.length === 0) {
    return <h3>Vous n'avez pas encore de bar dans vos favoris</h3>;
  }

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Mes bars favoris</h2>

      <button
        type="button"
        className="carousel-arrow left"
        onClick={() => scrollByAmount("left")}
      >
        ‹
      </button>

      <div className="carousel-wrapper">
        <div className="groups-carousel" ref={carouselRef}>
          {barsFavourited.map((bar) => (
            <div key={bar.id} className="carousel-card">
              <BarCard bar={bar} />
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
    </div>
  );
}

export default BarsFavourited;
