import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import "./UserProfile.css";

interface UserInfo {
  id: number;
  firstname: string;
  lastname: string;
}

function UserProfile() {
  const [searchParams] = useSearchParams();
  const [activeSection, setActiveSection] = useState<
    "bars" | "groups" | "events"
  >("bars");
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const userId = searchParams.get("userId");

  if (!userId) {
    return <div>Please log in to view your profile</div>;
  }

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`/api/users/${userId}/profile`);
        if (response.ok) {
          const data = await response.json();
          setUserInfo(data);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (!userInfo) {
    return <LoadingScreen />;
  }

  return (
    <div className="user-profile">
      <header className="profile-header">
        <div className="user-info">
          <div className="user-icon">
            <img 
              src="/icon/profile-icon.svg" 
              alt="User Profile"
              className="user-icon-image"
            />
          </div>
          <h1>{userInfo.firstname} {userInfo.lastname}</h1>
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
            <div className="placeholder-content">
              <p>Section BARS - Implémentation des cartes à faire</p>
            </div>
          </section>
        )}

        {activeSection === "groups" && (
          <section className="groups-section">
            <div className="placeholder-content">
              <p>Section GROUPS - Implémentation des cartes à faire</p>
            </div>
          </section>
        )}

        {activeSection === "events" && (
          <section className="events-section">
            <div className="placeholder-content">
              <p>Section EVENTS - Implémentation des cartes à faire</p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default UserProfile;
