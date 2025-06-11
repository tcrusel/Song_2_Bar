import "./Header.css";
import { useState } from "react";

function Header() {
  const [search, setSearch] = useState("");
  return (
    <section className="component-header">
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
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        style={{
          width: "34rem",
          maxWidth: "600px",
          height: "1.5rem",
          padding: "20px",
        }}
        placeholder="Recherche un bar ou un groupe de musique..."
      />
      <img
        className="logo-connexion"
        src="./images/logo-connexion.png"
        alt="le logo de la connexion"
        style={{ width: "5%" }}
      />
    </section>
  );
}

export default Header;
