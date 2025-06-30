import EventList from "../../components/EventList/EventList";
import "./Event.css";
import { useEffect, useState } from "react";
import type { EventType } from "../../types/EventType";

function Events() {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/events`)
      .then((response) => response.json())
      .then((events) => {
        setEvents(events); // gestion d'erreur
      });
  }, []);
  if (events.length === 0) {
    return <h1>Désolée il n'y a pas d'évènements </h1>;
  }

  return (
    <>
      <section className="events">
        <EventList events={events} />
        <h1 className="filters">filtre à venir</h1>
      </section>
    </>
  );
}
export default Events;
