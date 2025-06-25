import { useState } from "react";
import "./Header.css";
import UserRole from "./UserRole/UserRole";

function Header() {
  const [search, setSearch] = useState("");
  const [showUserRole, setShowUserRole] = useState(false);

  const toggleUserRole = () => {
    setShowUserRole((prev) => !prev);
  };

  return (
    <section className="header">
      <img
        className="logo-song2bar"
        src="./images/logo-site.png"
        alt="logo du site"
        style={{ width: "15%" }}
      />

      <input
        className="search-bar"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        style={{
          width: "38rem",
          maxWidth: "600px",
          height: "4.5rem",
          padding: "20px",
        }}
        placeholder="Recherche un bar ou un groupe de musique..."
      />

      <div className="connexion-wrapper">
        <button
          className="logo-connexion-button"
          type="button"
          onClick={toggleUserRole}
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
