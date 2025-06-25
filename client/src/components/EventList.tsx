import type { EventType } from "../pages/event/Events";
import EventCard from "./EventCard";
import "./EventList.css";

type Props = {
  events: EventType[];
};

function EventList({ events }: Props) {
  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          style={event.music_style}
          start_at={event.start_at}
          bar_name={event.bar_name}
          image={event.image}
        />
      ))}
    </div>
  );
}

export default EventList;
