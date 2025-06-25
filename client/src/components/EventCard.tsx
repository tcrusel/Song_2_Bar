import "./EventCard.css";
type EventCardProps = {
  title: string;
  start_at: string;
  bar_name: string;
  image: string;
  style: string;
};

function EventCard({
  title,
  start_at,
  image,
  bar_name,
  style,
}: EventCardProps) {
  const formatTime = (value: string) => {
    return `${value.slice(0, 2)}h`;
  };
  return (
    <div className="card">
      <div className="card-image">
        <img
          className="card-image"
          src={image}
          alt={`Illustration de ${title}`}
        />
      </div>
      <div className="event-content">
        <h2 className="event-title">{title}</h2>
        <p className="event-style">{style}</p>
      </div>
      <div className="event-footer">
        <p className="event-bar">
          <img
            src="/icon/location_icon.png"
            alt="Localisation"
            className="location_icon"
          />
          {bar_name}
        </p>

        <p className="event-time">
          <img src="/icon/time_icon.png" alt="Heure" className="time_icon" />
          {formatTime(start_at)}
        </p>
      </div>
    </div>
  );
}
export default EventCard;
