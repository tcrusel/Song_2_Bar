import EventList from "../../components/EventList";
import "./Event.css";

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
        <EventList events={events} />
      </section>
    </div>
  );
}
export default Events;
