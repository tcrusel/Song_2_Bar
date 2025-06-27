import EventCard from "../../components/EventCard";
import { useEffect, useState } from "react";

export interface EventType {
  id: number;
  title: string;
  start_at: string;
  bar_id: number;
  bar_name: string;
  image: string;
  music_group_id: number;
  group_name: string;
  music_style: string;
}

function Events() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/events")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
      });
  }, []);
  
  if (!events) {
    return <h1>Désolée il n'y a pas d'évènements </h1>;
  }

  return (
    <div>
      <section>
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            start_at={event.start_at}
            bar_name={event.bar_name}
            image={event.image}
            style={event.music_style}
          />
        ))}
      </section>
    </div>
  );
}
export default Events;
