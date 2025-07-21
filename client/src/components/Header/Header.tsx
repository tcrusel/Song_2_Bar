import "./Header.css";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <section className="header">
        <img
          className="logo-song2bar"
          src="/images/logo-site.png"
          alt="logo du site"
        />

        <div className="connexion-wrapper">
          <button
            className="logo-connexion-button"
            type="button"
            onClick={() => navigate("/login")}
          >
            <img
              className="logo-connexion"
              src="/icon/profile-icon.svg"
              alt="le logo de la connexion"
            />
          </button>
        </div>
      </section>
    </>
  );
}

export default Header;
