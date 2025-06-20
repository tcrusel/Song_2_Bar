import "./EventCard.css";
type EventCardProps = {
  title: string;
  date: string;
  start_at: string;
  bar_name: string;
  image: string;
};

function EventCard({ title, date, start_at, image }: EventCardProps) {
  return (
    <div className="card">
      <img
        src={image}
        alt={`Illustration de ${title}`}
        className="event-image"
      />
      <div className="event-content">
        <h2 className="event-title">{title}</h2>
        {/* <p className="event-bar">Lieu : {bar_name}</p> */}
        <p className="event-date">Date : {date}</p>
        <p className="event-time">Heure : {start_at}</p>
      </div>
    </div>
  );
}

export default EventCard;
