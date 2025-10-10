import "./Footer.css";
import flickrLogo from "/images/home_images/mini-logo-flickr.png";
import icoLogo from "/images/home_images/mini-logo-ico.png";
import rssLogo from "/images/home_images/mini-logo-rss.png";
import twitterLogo from "/images/home_images/mini-logo-twitter.png";
import vimeoLogo from "/images/home_images/mini-logo-vimeo.png";
import fbLogo from "/images/home_images/mini-logo-facebook.png";
import microImage from "/images/home_images/micro.png";

function Footer() {
  return (
    <>
      <footer>
        <article className="networks">
          <p className="follow-us">Rejoignez-nous sur les reseaux sociaux :</p>
          <div className="image-social-logo">
            <img src={flickrLogo} alt="logo flickr" />
            <img src={icoLogo} alt="logo ico" />
            <img src={rssLogo} alt="logo rss" />
            <img src={twitterLogo} alt="logo twitter" />
            <img src={vimeoLogo} alt="logo vimeo" />
            <img src={fbLogo} alt="logo facebook" />
          </div>

          <button type="button" className="button-subscribers">
            S'ABONNER <br /> (Déjà 150 000 abonnés !)
          </button>
        </article>
        <article className="footer-middle-container">
          <p className="legal-notices">Mentions légales, crédits et C.G.U.</p>
          <img
            src={microImage}
            alt="logo micro du site"
            width="auto"
            height="100"
          />
          <p>⚠️ Site de démonstration – données fictives</p>
        </article>
        <article className="info-song2bar">
          <div className="paragraph-song2bar">
            <p>Song2Bar 2025-</p>
            <p>
              Song2Bar.fr le guide de vos concerts dans les meilleurs bars de
              Bordeaux.
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
          <div className="about-contact">
            <div className="about">
              <p>A propos</p>
            </div>
            <div className="contact">
              <p>Contact</p>
            </div>
          </div>
        </article>
      </footer>
    </>
  );
}

export default Footer;
