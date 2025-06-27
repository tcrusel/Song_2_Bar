import FavouriteGroup from "../../components/FavouriteGroup";
import "./Home.css";
import "./../../assets/_variables.css";

function Home() {
  return (
    <>
      <main>
        <img
          className="flower-guitar"
          src="./images/micro-guitare.svg"
          alt="représentation de la guitare avec des fleurs"
          width="cover"
          height="auto"
        />
        <section className="guide">
          <button className="when-button" type="button">
            QUAND ?
          </button>
          <article className="user-action">
            <div>
              <p>1. </p>
              <img
                src="./images/mini-icone-calendrier.png"
                alt="representation mini-icone-coeur"
              />
              <p>Choisissez une date</p>
            </div>
            <div>
              <p>2. </p>
              <img
                src="./images/mini-icone-epingle.png"
                alt="mini-icone-coeur"
              />
              <p>Cliquez pour plus d'infos</p>
            </div>
            <div>
              <p>3. </p>
              <img src="./images/mini-icone-coeur.png" alt="mini-icone-coeur" />
              <p>Créez votre sélection</p>
            </div>
            <div>
              <p>4. </p>
              <img
                src="./images/mini-icone-guitare.png"
                alt="mini-icone-guitare"
              />
              <p>Explorez les concerts du jour</p>
            </div>
            <div>
              <p>5. </p>
              <img src="./images/mini-icone-loupe.png" alt="mini-icone-loupe" />
              <p>Utilisez les filtres</p>
            </div>
            <div>
              <p>6. </p>
              <img src="./images/mini-icone-carte.png" alt="mini-icone-carte" />
              <p>Trouvez votre chemin</p>
            </div>
          </article>
        </section>
        <FavouriteGroup />
      </main>
    </>
  );
}

export default Home;
