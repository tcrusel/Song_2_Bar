import { useNavigate } from "react-router";
import type { MusicGroupInterface } from "../../types/musicGroup";

type GroupCardProps = {
  group: MusicGroupInterface;
};

function GroupCard({ group }: GroupCardProps) {
  const navigate = useNavigate();

  return (
    <article
      className="card"
      onClick={() => navigate(`/groups/${group.id}`)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          navigate(`/groups/${group.id}`);
        }
      }}
    >
      <img
        className="card-image"
        src={group.image}
        alt={`Groupe ${group.name}`}
      />
      <aside className="card-content">
        <h2 className="card-title">{group.name}</h2>
        <p className="card-style">{group.style}</p>
      </aside>
    </article>
  );
}

export default GroupCard;
