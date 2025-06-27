import { useState } from "react";
import "./Header.css";
import UserRole from "./UserRole/UserRole";

function Header() {
  const [search, setSearch] = useState("");
  const [showUserRole, setShowUserRole] = useState(false);

  return (
    <section className="header">
      <img
        className="logo-song2bar"
        src="./images/logo-site.png"
        alt="logo du site"
        width="15%"
      />

      <input
        className="search-bar"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Recherche un bar ou un groupe de musique..."
      />

      <div className="connexion-wrapper">
        <button
          className="logo-connexion-button"
          type="button"
          onClick={() => setShowUserRole((prev) => !prev)}
        >
          <img
            className="logo-connexion"
            src="./images/logo-connexion.png"
            alt="le logo de la connexion"
          />
        </button>

        {showUserRole && (
          <div className="user-role-container">
            <UserRole />
          </div>
        )}
      </div>
    </section>
  );
}

export default Header;
