import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import type { UserProfileData } from "../../types/UserProfile";
import "../../components/EventCard/EventCard.css";
import "./UserProfile.css";

function UserProfile() {
  const [searchParams] = useSearchParams();
  const [profileData, setProfileData] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<
    "bars" | "groups" | "events"
  >("bars");

  // For testing: use URL parameter or default to user 12 (has good test data)
  const userId = searchParams.get("userId") || "12";

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/users/${userId}/profile`,
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProfileData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (loading) return <div className="loading">Chargement...</div>;
  if (error) return <div className="error">Erreur: {error}</div>;
  if (!profileData)
    return <div className="error">Aucune donnée de profil trouvée</div>;

  return (
    <div className="user-profile">
      {/* Testing note - remove when authentication is implemented */}
      <div
        style={{
          background: "#333",
          color: "#fff",
          padding: "10px",
          margin: "10px 0",
          borderRadius: "5px",
          fontSize: "14px",
        }}
      >
        📝 <strong>Test Mode:</strong> Add ?userId=X to URL to test different
        users (1-30). Default is user 12 (has test data). Example:
        /profile?userId=5
      </div>

      <header className="profile-header">
        <div className="user-info">
          <div className="user-icon">👤</div>
          <h1>Profil Utilisateur #{userId}</h1>
        </div>
      </header>

      <nav className="profile-nav">
        <button
          type="button"
          className={`nav-button ${activeSection === "bars" ? "active" : ""}`}
          onClick={() => setActiveSection("bars")}
        >
          BAR
        </button>
        <button
          type="button"
          className={`nav-button ${activeSection === "groups" ? "active" : ""}`}
          onClick={() => setActiveSection("groups")}
        >
          GROUP
        </button>
        <button
          type="button"
          className={`nav-button ${activeSection === "events" ? "active" : ""}`}
          onClick={() => setActiveSection("events")}
        >
          EVENT
        </button>
      </nav>

      <main className="profile-content">
        {activeSection === "bars" && (
          <section className="bars-section">
            <div className="cards-grid">
              {profileData.favoriteBars.map((bar) => (
                <Link to={`/bar/${bar.id}`} key={bar.id} className="card">
                  <img src={bar.image1} alt={bar.name} className="card-image" />
                  <aside className="card-content">
                    <h2 className="event-title">{bar.name}</h2>
                    <p className="event-style">{bar.music_style}</p>
                  </aside>
                  <aside className="card-bottom">
                    <div className="card-bottom-corner">
                      <img
                        src="/icon/location_icon.png"
                        alt="Localisation"
                        className="location_icon"
                      />
                      <p className="event-bar">{bar.city}</p>
                    </div>
                  </aside>
                </Link>
              ))}
            </div>
            {profileData.favoriteBars.length === 0 && (
              <p className="empty-message">Aucun bar favori pour le moment</p>
            )}
          </section>
        )}

        {activeSection === "groups" && (
          <section className="groups-section">
            <div className="cards-grid">
              {profileData.favoriteGroups.map((group) => (
                <Link
                  to={`/groups/${group.id}`}
                  key={group.id}
                  className="card"
                >
                  <img
                    src={group.image}
                    alt={group.name}
                    className="card-image"
                  />
                  <aside className="card-content">
                    <h2 className="event-title">{group.name}</h2>
                    <p className="event-style">{group.style}</p>
                  </aside>
                </Link>
              ))}
            </div>
            {profileData.favoriteGroups.length === 0 && (
              <p className="empty-message">
                Aucun groupe favori pour le moment
              </p>
            )}
          </section>
        )}

        {activeSection === "events" && (
          <section className="events-section">
            <div className="cards-grid">
              {profileData.participatedEvents.map((event) => (
                <Link
                  to={`/events/${event.id}`}
                  key={event.id}
                  className="card"
                >
                  <img
                    src={event.image}
                    alt={`Illustration de ${event.title}`}
                    className="card-image"
                  />
                  <aside className="card-content">
                    <h2 className="event-title">{event.title}</h2>
                    <p className="event-style">{event.music_style}</p>
                  </aside>
                  <aside className="card-bottom">
                    <div className="card-bottom-corner">
                      <img
                        src="/icon/location_icon.png"
                        alt="Localisation"
                        className="location_icon"
                      />
                      <p className="event-bar">{event.bar_name}</p>
                    </div>
                    <div className="card-bottom-corner">
                      <img
                        src="/icon/time_icon.png"
                        alt="Heure"
                        className="time_icon"
                      />
                      <p className="event-time">
                        {event.start_at.slice(0, 2)}h
                      </p>
                    </div>
                  </aside>
                </Link>
              ))}
            </div>
            {profileData.participatedEvents.length === 0 && (
              <p className="empty-message">
                Aucun événement rejoint pour le moment
              </p>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default UserProfile;
