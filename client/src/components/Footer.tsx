import "./footer.css";

function Footer() {
  return (
    <footer>
      <section className="user-reseaux">
        <p>Rejoignez-nous sur les reseaux sociaux :</p>
        <article className="images-logo-sociaux">
          <img src="./images/mini-logo-flickr.png" alt="mini-logo-flickr" />
          <img src="./images/mini-logo-ico.png" alt="mini-logo-ico" />
          <img src="./images/mini-logo-rss.png" alt="mini-logo-rss" />
          <img src="./images/mini-logo-twitter.png" alt="mini-logo-twitter" />
          <img src="./images/mini-logo-vimeo.png" alt="mini-logo-vimeo" />
          <img src="./images/mini-logo-facebook.png" alt="mini-logo-facebook" />
        </article>
        <article className="abonnés">
          <p className="nombre-abonnés">
            Déjas 150 000
            <br />
            abonnés !
          </p>
        </article>
        <button type="button" className="button-abonnés">
          S'ABONNER
        </button>
      </section>
      <section className="footer-images">
        <img src="./images/micro.png" alt="micro" />
        <article className="commande-page">
          <button className="haut-page" type="button">
            Haut de page
          </button>
          <p>Mentions légales, crédits et C.G.U.</p>
        </article>
        <img src="./images/guitare-fleur.png" alt="guitare-fleur" />
      </section>
      <section className="info-song2bar">
        <article className="paragraphe-song2bar">
          <p>Song2Bar 2025-</p>
          <p>
            Song2Bar.fr le guide de vos concert dans les meilleurs bar de
            Bordeaux
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
        <article className="apropos-contact">
          <aside className="apropos">
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
