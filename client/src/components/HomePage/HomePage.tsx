import "./HomePage.css";

function HomePage() {
  return (
    <>
      <main>
        <img
          className="guitard-fleur"
          src="./images/micro-guitard.svg"
          alt="representation de la guitare avec des fleurs"
          width="cover"
          height="auto"
        />
        <section className="main-guide">
          <button
            className="quand"
            type="button"
            style={{ width: "28rem", height: "6rem" }}
          >
            QUAND ?
          </button>
          <article className="user-action">
            <p>
              1.
              <img
                src="./images/mini-icone-calendrier.png"
                alt="representation mini-icone-coeur"
              />
              Choisissez une date
            </p>
            <p>
              2.
              <img
                src="./images/mini-icone-epingle.png"
                alt="mini-icone-coeur"
              />
              Cliquez pour plus d'infos
            </p>
            <p>
              3.
              <img src="./images/mini-icone-coeur.png" alt="mini-icone-coeur" />
              Créez votre selection
            </p>
            <p>
              4.
              <img
                src="./images/mini-icone-guitare.png"
                alt="mini-icone-guitare"
              />
              Explorez les concerts du jour
            </p>
            <p>
              5.
              <img src="./images/mini-icone-loupe.png" alt="mini-icone-loupe" />
              Utilisez les filtres
            </p>
            <p>
              6.
              <img src="./images/mini-icone-carte.png" alt="mini-icone-carte" />
              Trouvez votre chemin
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

export default HomePage;
