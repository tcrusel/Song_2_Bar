import "./MusicGroup.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styleIcon from "/images/group_images/music-style-icon.svg";
import Favourite from "../../components/Favourite/FavouriteTest";
import type { MusicGroupInterface } from "../../types/musicGroup";

function MusicGroup() {
  const [musicGroup, setMusicGroup] = useState<MusicGroupInterface | null>(
    null,
  );
  const { id } = useParams();

  // Ajout d'un user_id fictif, à remplacer par ta vraie source
  const user_id = 1;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/groups/${id}`)
      .then((response) => response.json())
      .then((musicGroup) => {
        setMusicGroup(musicGroup);
        console.log(musicGroup);
      });
  }, [id]);

  // Déplacer toggleFavourite hors de useEffect et la définir normalement
  const toggleFavourite = async () => {
    if (!id) return;

    fetch(`${import.meta.env.VITE_API_URL}/api/favourite_music_group`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, music_group_id: Number(id) }),
    }).catch((err) => console.error("Erreur lors du toggle:", err));
  };

  if (!musicGroup)
    return (
      <>
        <section className="fail">
          <h1>Groupe de musique introuvable</h1>
          <button type="button">Revenir à l'accueil</button>
        </section>
      </>
    );

  return (
    <>
      <section className="group-information">
        <h1 className="button-title">
          {musicGroup.name} <Favourite />
          {/* Déplacer onClick sur un élément valide, ici le bouton */}
          <button
            type="button"
            onClick={toggleFavourite}
            style={{ marginLeft: "1rem" }}
          >
            Toggle Favorite
          </button>
        </h1>

        <article className="group-title">
          <img
            src={styleIcon}
            alt="icone style de musique"
            width="40"
            height="auto"
          />
          <h2>{musicGroup.style}</h2>
        </article>
        <article className="group-articles">
          <aside>
            <img
              className="poster-group"
              src={musicGroup.image}
              alt="poster du groupe"
            />
          </aside>
          <aside>
            <p className="description">{musicGroup.description}</p>
          </aside>
        </article>
      </section>
      <section className="bar-caroussel">
        <p>Caroussel de bars à venir</p>
      </section>
    </>
  );
}

export default MusicGroup;
