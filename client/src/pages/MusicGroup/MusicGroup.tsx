import "./MusicGroup.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styleIcon from "../../../public/images/music-style-icon.svg";
import type { MusicGroupInterface } from "../../types/musicGroup";

function MusicGroup() {
  const [musicGroup, setMusicGroup] = useState<MusicGroupInterface | null>(
    null,
  );
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/groups/${id}`)
      .then((response) => response.json())
      .then((musicGroup) => setMusicGroup(musicGroup));
  }, [id]);

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
        <h1 className="button-title">{musicGroup.name}</h1>
        <div className="group-title">
          <img
            src={styleIcon}
            alt="icone style de musique"
            width="40"
            height="auto"
          />
          <h2>{musicGroup.style}</h2>
        </div>
        <div className="group-articles">
          <article>
            <img
              className="poster-group"
              src={musicGroup.image}
              alt="poster du groupe"
            />
          </article>
          <article>
            <p className="description">{musicGroup.description}</p>
          </article>
        </div>
      </section>
      <section className="bar-caroussel">
        <p>Caroussel de bars à venir</p>
      </section>
    </>
  );
}

export default MusicGroup;
