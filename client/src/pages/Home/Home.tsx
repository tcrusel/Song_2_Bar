import { useState } from "react";
import CalendarPopup from "../../components/CalendarPopUp/CalendarPopUp";
import "./Home.css";
import "./../../assets/_variables.css";
import { useNavigate } from "react-router";

function Home() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const navigate = useNavigate();

  const DateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      navigate("/events", { state: { selectedDate: date.toISOString() } });
    }
  };

  return (
    <>
      <main id="home-page">
        <img
          className="flower-guitar"
          src="../../../images/micro-guitare.svg"
          alt="représentation de la guitare avec des fleurs"
        />
        <section className="guide">
          <CalendarPopup value={selectedDate} onChangeDate={DateChange} />

          <article className="user-actions">
            <div className="action">
              <h3>1. </h3>
              <img
                src="/images/home_images/mini-icone-calendrier.png"
                alt="representation mini-icone-coeur"
              />
              <h3>Choisissez une date</h3>
            </div>
            <div className="action">
              <h3>2. </h3>
              <img
                src="/images/home_images/mini-icone-epingle.png"
                alt="mini-icone-coeur"
              />
              <h3>Cliquez pour plus d'infos</h3>
            </div>
            <div className="action">
              <h3>3. </h3>
              <img
                src="/images/home_images/mini-icone-coeur.png"
                alt="mini-icone-coeur"
              />
              <h3>Créez votre sélection</h3>
            </div>
            <div className="action">
              <h3>4. </h3>
              <img
                src="/images/home_images/mini-icone-guitare.png"
                alt="mini-icone-guitare"
              />
              <h3>Explorez les concerts du jour</h3>
            </div>
            <div className="action">
              <h3>5. </h3>
              <img
                src="/images/home_images/mini-icone-loupe.png"
                alt="mini-icone-loupe"
              />
              <h3>Utilisez les filtres</h3>
            </div>
            <div className="action">
              <h3>6. </h3>
              <img
                src="/images/home_images/mini-icone-carte.png"
                alt="mini-icone-carte"
              />
              <h3>Trouvez votre chemin</h3>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Home;
