import "./MusicGroup.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styleIcon from "/images/group_images/music-style-icon.svg";
import BarCard from "../../components/BarCard/BarCard";
import type { Bar } from "../../types/bar";
import type { MusicGroupInterface } from "../../types/musicGroup";
import EmblaCarousel from "../../components/EmblaCarousel/EmblaCarousel";

function MusicGroup() {
  const [musicGroup, setMusicGroup] = useState<MusicGroupInterface | null>(
    null,
  );
  const [bars, setBars] = useState<Bar[]>([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/groups/${id}`)
      .then((response) => response.json())
      .then((musicGroup) => setMusicGroup(musicGroup));
  }, [id]);

  useEffect(() => {
    async function fetchBars() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/groups/${id}/bars`,
        );
        if (!res.ok) {
          throw new Error("Erreur lors de la récupération des bars");
        }
        const bars = await res.json();
        setBars(bars);
      } catch (error) {
        console.error("Erreur lors du fetch", error);
      }
    }
    fetchBars();
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
      <section className="bar-carousel">
        {bars && bars.length > 0 ? (
          <EmblaCarousel
            slides={bars.map((bar) => ({
              id: bar.id,
              content: <BarCard bar={bar} />,
            }))}
            options={{ loop: true, align: "start" }}
          />
        ) : (
          <h1>
            Ce groupe de musique n'a pas encore d'évènement prévu dans un bar
          </h1>
        )}
      </section>
    </>
  );
}

export default MusicGroup;
