import { useCallback, useEffect, useRef, useState } from "react";
import EventParticipation from "../../components/EventParticipation/EventParticipation";
import GroupCard from "../../components/GroupCard/GroupCard";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import type { UserInfo } from "../../types/User";
import type { MusicGroupInterface } from "../../types/musicGroup";
import "./UserProfile.css";
import { useAuth } from "../../contexts/AuthContext";

function UserProfile() {
  const [activeTab, setActiveTab] = useState("bars");
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [favoriteGroups, setFavoriteGroups] = useState<MusicGroupInterface[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [groupsLoading, setGroupsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { auth } = useAuth();
  const userId = auth?.user.id;

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
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
  }, [userId]);

  const fetchFavoriteGroups = useCallback(async () => {
    try {
      setGroupsLoading(true);
      const userId = 12;

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/${userId}/favourite_groups`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch favorite groups");
      }

      const groups = await response.json();
      setFavoriteGroups(groups);
    } catch (error) {
      console.error("Error fetching favorite groups:", error);
    } finally {
      setGroupsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (activeTab === "groups" && favoriteGroups.length === 0) {
      fetchFavoriteGroups();
    }
  }, [activeTab, favoriteGroups.length, fetchFavoriteGroups]);

  const cardsPerPage = 5;
  const totalPages = Math.ceil(favoriteGroups.length / cardsPerPage);

  const scrollToPage = (pageIndex: number) => {
    if (carouselRef.current) {
      const cardWidth = 160;
      const gap = 24;
      const scrollPosition = pageIndex * cardsPerPage * (cardWidth + gap);

      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });

      setCurrentPage(pageIndex);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      scrollToPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      scrollToPage(currentPage + 1);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const cardWidth = 160;
      const gap = 24;
      const scrollLeft = carouselRef.current.scrollLeft;
      const newPage = Math.round(
        scrollLeft / (cardsPerPage * (cardWidth + gap)),
      );
      setCurrentPage(Math.min(newPage, totalPages - 1));
    }
  };

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
            <div className="groups-section">
              <h2>Mes Groupes Favoris</h2>
              {groupsLoading ? (
                <p>Chargement de vos groupes favoris...</p>
              ) : favoriteGroups.length > 0 ? (
                <div className="carousel-container">
                  <div className="carousel-wrapper">
                    <div
                      className="groups-carousel"
                      ref={carouselRef}
                      onScroll={handleScroll}
                    >
                      {favoriteGroups.map((group) => (
                        <GroupCard key={group.id} group={group} />
                      ))}
                    </div>

                    <button
                      type="button"
                      className="carousel-arrow left"
                      onClick={goToPreviousPage}
                      disabled={currentPage === 0}
                      aria-label="Previous page"
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      className="carousel-arrow right"
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages - 1}
                      aria-label="Next page"
                    >
                      ›
                    </button>
                  </div>

                  {totalPages > 1 && (
                    <div className="carousel-dots">
                      {Array.from({ length: totalPages }, (_, index) => (
                        <button
                          key={`page-${index + 1}`}
                          type="button"
                          className={`carousel-dot ${index === currentPage ? "active" : ""}`}
                          onClick={() => scrollToPage(index)}
                          aria-label={`Go to page ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <p>
                  Vous n'avez pas encore de groupes favoris. Explorez nos
                  événements pour découvrir de nouveaux groupes !
                </p>
              )}
            </div>
          </div>
        );
      case "events":
        return (
          <div className="tab-content">
            <div>
              <EventParticipation />
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
