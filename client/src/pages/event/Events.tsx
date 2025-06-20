import EventList from "../../components/EventList";

import { useEffect, useState } from "react";

export interface EventType {
  id: number;
  title: string;
  date: string;
  start_at: string;
  bar_name: string;
  image: string;
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
    return <h1>nope </h1>;
  }
  return (
    <div>
      <h1>Liste des events</h1>
      <section>
        <EventList events={events} />
      </section>
    </div>
  );
}
export default Events;
