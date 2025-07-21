import "./GroupCard.css";
import { useNavigate } from "react-router";
import type { MusicGroupInterface } from "../../types/musicGroup";

type GroupCardProps = {
  group: MusicGroupInterface;
};

function GroupCard({ group }: GroupCardProps) {
  const navigate = useNavigate();

  return (
    <article
      className="card group-card"
      onClick={() => navigate(`/groups/${group.id}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          navigate(`/groups/${group.id}`);
        }
      }}
      style={{
        width: "160px",
        minWidth: "160px",
        height: "250px",
        backgroundColor: "white",
        display: "flex",
        borderRadius: "20px 20px 0 0",
        flexDirection: "column",
        cursor: "pointer",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Image Section with angled cut */}
      <div
        style={{
          height: "125px",
          overflow: "hidden",
          borderRadius: "20px 20px 0 0",
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
        }}
      >
        <img
          src={group.image}
          alt={`Groupe ${group.name}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Content Section */}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            color: "#7a331b",
            fontSize: "0.9rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {group.name}
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          padding: "8px",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "1px solid #f0f0f0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
            }}
          >
            🎵
          </span>
          <span
            style={{
              color: "black",
              fontSize: "0.5rem",
            }}
          >
            {group.style}
          </span>
        </div>
      </div>
    </article>
  );
}

export default GroupCard;
