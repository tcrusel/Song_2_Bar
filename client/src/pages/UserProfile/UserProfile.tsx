import { useEffect, useState } from "react";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import type { UserInfo } from "../../types/User";
import "./UserProfile.css";

function UserProfile() {
  const [activeTab, setActiveTab] = useState("bars");
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // TODO: Replace with actual user ID from authentication context
        // For now, using direct assignment for development
        const userId = 12;

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/users/${userId}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user profile");
        }

        const userInfo = await response.json();
        setUserInfo(userInfo);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError("Failed to load user profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className="user-profile-container">
        <div className="error-container">
          <h2>Erreur</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!userInfo) {
    return (
      <div className="user-profile-container">
        <div className="error-container">
          <h2>Utilisateur non trouvé</h2>
          <p>Aucune information utilisateur disponible</p>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "bars":
        return (
          <div className="tab-content">
            <div>
              <h2>Mes Bars Favoris</h2>
              <p>Mes bars favoris apparaîtront ici prochainement</p>
            </div>
          </div>
        );
      case "groups":
        return (
          <div className="tab-content">
            <div>
              <h2>Mes Groupes Favoris</h2>
              <p>Mes groupes favoris apparaîtront ici prochainement</p>
            </div>
          </div>
        );
      case "events":
        return (
          <div className="tab-content">
            <div>
              <h2>Mes Événements</h2>
              <p>Mes événements apparaîtront ici prochainement</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="user-profile-container">
      <header className="user-profile-header">
        <div className="user-info">
          <div className="user-icon">
            <img
              src="/icon/profile-icon.svg"
              alt="User Profile"
              className="user-icon-image"
            />
          </div>
          <h1>
            {userInfo.firstname} {userInfo.lastname}
          </h1>
        </div>
      </header>

      <nav className="nav-tabs">
        <div className="nav-tabs-container">
          <button
            type="button"
            className={`nav-tab ${activeTab === "bars" ? "active" : ""}`}
            onClick={() => setActiveTab("bars")}
          >
            BARS
          </button>
          <button
            type="button"
            className={`nav-tab ${activeTab === "groups" ? "active" : ""}`}
            onClick={() => setActiveTab("groups")}
          >
            GROUPES
          </button>
          <button
            type="button"
            className={`nav-tab ${activeTab === "events" ? "active" : ""}`}
            onClick={() => setActiveTab("events")}
          >
            ÉVÉNEMENTS
          </button>
        </div>
      </nav>

      <main className="user-profile-content">{renderTabContent()}</main>
    </div>
  );
}

export default UserProfile;
