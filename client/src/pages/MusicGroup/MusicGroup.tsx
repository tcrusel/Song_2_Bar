import "./MusicGroup.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styleIcon from "../../../public/images/music-style-icon.svg";

interface MusicGroupInterface {
  name: string;
  image: string;
  style: string;
  description: string;
}

function MusicGroup() {
  const [dataGroup, setDataGroup] = useState<MusicGroupInterface | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3310/api/groups/${id}`)
      .then((response) => response.json())
      .then((data) => setDataGroup(data));
  }, [id]);

  if (!dataGroup)
    return (
      <>
        <h1>Groupe introuvable</h1>
        <button type="button">Revenir à l'accueil</button>
      </>
    );

  return (
    <>
      <section className="group-information">
        <h1 className="button-title">{dataGroup.name}</h1>
        <div className="group-title">
          <img
            src={styleIcon}
            alt="icone style de musique"
            width="40"
            height="auto"
          />
          <h2>{dataGroup.style}</h2>
        </div>
        <div className="group-articles">
          <article>
            <img
              className="poster-group"
              src={dataGroup.image}
              alt="poster du groupe"
            />
          </article>
          <article>
            <p className="description">{dataGroup.description}</p>
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
