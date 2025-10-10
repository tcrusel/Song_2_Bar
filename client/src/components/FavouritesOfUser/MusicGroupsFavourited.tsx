import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import type { MusicGroupInterface } from "@/types/musicGroup";
import GroupCard from "../GroupCard/GroupCard";
import { URL } from "@/config/api";

function MusicGroupsFavourited() {
  const [musicGroupsFavorited, setMusicGroupsFavourited] = useState<
    MusicGroupInterface[]
  >([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchMusicGroupsFavourited = async () => {
      if (!auth) return;

      try {
        const response = await fetch(`${URL}/api/favourite_music_group`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        });

        if (!response.ok) {
          throw new Error(
            "Erreur lors du chargement des groupes de musique en favoris",
          );
        }

        const musicGroupsFavorited = await response.json();
        setMusicGroupsFavourited(musicGroupsFavorited);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMusicGroupsFavourited();
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

  if (
    !Array.isArray(musicGroupsFavorited) ||
    musicGroupsFavorited.length === 0
  ) {
    return (
      <h3>Vous n'avez pas encore de groupe de musique dans vos favoris</h3>
    );
  }

  return (
    <section className="user-favorites">
      <h2 className="carousel-title">Mes groupes de musique favoris</h2>
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
            {musicGroupsFavorited.map((musicGroup) => (
              <div key={musicGroup.id} className="carousel-card">
                <GroupCard group={musicGroup} />
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

export default MusicGroupsFavourited;
