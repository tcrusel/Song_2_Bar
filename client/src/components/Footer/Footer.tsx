import "./footer.css";

function Footer() {
  function useClic() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer>
      <section className="networks">
        <p>Rejoignez-nous sur les reseaux sociaux :</p>
        <article className="image-social-logo">
          <img src="./images/mini-logo-flickr.png" alt="mini-logo-flickr" />
          <img src="./images/mini-logo-ico.png" alt="mini-logo-ico" />
          <img src="./images/mini-logo-rss.png" alt="mini-logo-rss" />
          <img src="./images/mini-logo-twitter.png" alt="mini-logo-twitter" />
          <img src="./images/mini-logo-vimeo.png" alt="mini-logo-vimeo" />
          <img src="./images/mini-logo-facebook.png" alt="mini-logo-facebook" />
        </article>
        <article className="subscribers">
          <p className="subscribers-number">
            Déjà 150 000
            <br />
            abonnés !
          </p>
        </article>
        <button type="button" className="button-subscribers">
          S'ABONNER
        </button>
      </section>
      <section className="footer-images">
        <img src="./images/micro.png" alt="micro" />
        <article className="middle-container">
          <button className="top-page" type="button" onClick={useClic}>
            Haut de page
          </button>
          <p>Mentions légales, crédits et C.G.U.</p>
        </article>
        <img src="./images/guitare-fleur.png" alt="guitare-fleur" />
      </section>
      <section className="info-song2bar">
        <article className="paragraph-song2bar">
          <p>Song2Bar 2025-</p>
          <p>
            Song2Bar.fr le guide de vos concerts dans les meilleurs bars de
            Bordeaux.
          </p>
        </article>
        <article className="newletter-song2bar">
          <aside className="newletter">
            <p>NewsLetter</p>
          </aside>
          <aside className="song2bar">
            <p>Song2Bar</p>
          </aside>
        </article>
        <article className="about-contact">
          <aside className="about">
            <p>A propos</p>
          </aside>
          <aside className="contact">
            <p>Contact</p>
          </aside>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
