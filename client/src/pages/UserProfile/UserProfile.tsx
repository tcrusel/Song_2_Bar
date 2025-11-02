import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import type { UserInfo } from "@/types/User";
import "./UserProfile.css";
import profileIcon from "/icon/profile-icon.svg";
import EventParticipationCarousel from "@/components/EventParticipation/EventParticipationCarousel";
import BarsFavourited from "@/components/FavouritesOfUser/BarsFavourited";
import EventsFavourited from "@/components/FavouritesOfUser/EventsFavourited";
import MusicGroupsFavourited from "@/components/FavouritesOfUser/MusicGroupsFavourited";
import { useAuth } from "@/contexts/AuthContext";
import { URL } from "@/config/api";

function UserProfile() {
  const [activeTab, setActiveTab] = useState("bars");
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { auth } = useAuth();
  const userId = auth?.user.id;

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`${URL}/api/users/${userId}`);

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
  }, [userId]);

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
          <>
            <div className="event-section">
              <BarsFavourited />
            </div>
          </>
        );
      case "groups":
        return (
          <>
            <div className="event-section">
              <MusicGroupsFavourited />
            </div>
          </>
        );
      case "events":
        return (
          <>
            <div className="event-section">
              <EventParticipationCarousel />
            </div>
            <div className="event-section">
              <EventsFavourited />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <section className="user-profile-container">
      <article className="user-profile-header">
        <div className="user-info">
          <div className="user-icon">
            <img
              src={profileIcon}
              alt="User Profile"
              className="user-icon-image"
            />
          </div>
          <h1>
            {userInfo.firstname} {userInfo.lastname}
          </h1>
        </div>
      </article>

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

      <article className="user-profile-content">{renderTabContent()}</article>
    </section>
  );
}

export default UserProfile;
