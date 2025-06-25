import "./footer.css";

function Footer() {
  function useClic() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer>
      <div className="user-network">
        <div className="rejoignez-nous">
          <p>Rejoignez-nous sur les reseaux sociaux :</p>
        </div>
        <div className="image-social-logo">
          <img src="./images/mini-logo-flickr.png" alt="mini-logo-flickr" />
          <img src="./images/mini-logo-ico.png" alt="mini-logo-ico" />
          <img src="./images/mini-logo-rss.png" alt="mini-logo-rss" />
          <img src="./images/mini-logo-twitter.png" alt="mini-logo-twitter" />
          <img src="./images/mini-logo-vimeo.png" alt="mini-logo-vimeo" />
          <img src="./images/mini-logo-facebook.png" alt="mini-logo-facebook" />
        </div>
        <div className="subscribers">
          <p className="nombre-abonnés">
            Déjà 150 000
            <br />
            abonnés !
          </p>
        </div>
        <button type="button" className="button-abonnés">
          S'ABONNER
        </button>
      </div>
      <div className="footer-images">
        <img
          src="./images/micro.png"
          alt="micro"
          style={{ width: "13rem", height: "13rem" }}
        />
        <div className="commande-page">
          <button className="haut-page" type="button" onClick={useClic}>
            Haut de page
          </button>
          <p>Mentions légales, crédits et C.G.U.</p>
        </div>
        <img
          src="./images/guitare-fleur.png"
          alt="guitare-fleur"
          style={{ width: "13rem", height: "13rem" }}
        />
      </div>
      <div className="info-song2bar">
        <div className="paragraphe-song2bar">
          <p>Song2Bar 2025-</p>
          <p>
            Song2Bar.fr le guide de vos concert dans les meilleurs bar de
            Bordeaux
          </p>
        </div>
        <div className="newletter-song2bar">
          <div className="newletter">
            <p>NewsLetter</p>
          </div>
          <div className="song2bar">
            <p>Song2Bar</p>
          </div>
        </div>
        <div className="apropos-contact">
          <div className="apropos">
            <p>A propos</p>
          </div>
          <div className="contact">
            <p>Contact</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
