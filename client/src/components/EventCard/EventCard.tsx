import "./EventCard.css";
import type { Event } from "../../types/Event";

type EventCardProps = {
  event: Event;
};

function EventCard({ event }: EventCardProps) {
  console.log(event);
  const formatTime = (value: string) => {
    return `${value.slice(0, 2)}h`;
  };
  return (
    <article className="card">
      <div className="card-image">
        <img
          className="card-image"
          src={event.image}
          alt={`Illustration de ${event.title}`}
        />
      </div>
      <div className="card-content">
        <h2 className="event-title">{event.title}</h2>
        <p className="event-style">{event.music_style}</p>
      </div>
      <div className="card-bottom">
        <p className="event-bar">
          <img
            src="/icon/location_icon.png"
            alt="Localisation"
            className="location_icon"
          />
          {event.bar_name}
        </p>

        <p className="event-time">
          <img src="/icon/time_icon.png" alt="Heure" className="time_icon" />
          {formatTime(event.start_at)}
        </p>
      </div>
    </article>
  );
}
export default EventCard;
