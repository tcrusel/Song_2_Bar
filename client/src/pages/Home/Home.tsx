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
              <h4>1. </h4>
              <img
                src="/images/home_images/mini-icone-calendrier.png"
                alt="representation mini-icone-coeur"
              />
              <h4>Choisissez une date</h4>
            </div>
            <div className="action">
              <h4>2. </h4>
              <img
                src="/images/home_images/mini-icone-epingle.png"
                alt="mini-icone-coeur"
              />
              <h4>Cliquez pour plus d'infos</h4>
            </div>
            <div className="action">
              <h4>3. </h4>
              <img
                src="/images/home_images/mini-icone-coeur.png"
                alt="mini-icone-coeur"
              />
              <h4>Créez votre sélection</h4>
            </div>
            <div className="action">
              <h4>4. </h4>
              <img
                src="/images/home_images/mini-icone-guitare.png"
                alt="mini-icone-guitare"
              />
              <h4>Explorez les concerts du jour</h4>
            </div>
            <div className="action">
              <h4>5. </h4>
              <img
                src="/images/home_images/mini-icone-loupe.png"
                alt="mini-icone-loupe"
              />
              <h4>Utilisez les filtres</h4>
            </div>
            <div className="action">
              <h4>6. </h4>
              <img
                src="/images/home_images/mini-icone-carte.png"
                alt="mini-icone-carte"
              />
              <h4>Trouvez votre chemin</h4>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Home;
