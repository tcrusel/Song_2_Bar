import EventCard from "../../components/EventCard/EventCard";
import "./Event.css";
import { useEffect, useState } from "react";
import type { Event } from "../../types/Event";

function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchEvent() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/events`);
        if (!res.ok) {
          setError(true);
          return;
        }
        const events = await res.json();
        setEvents(events);
      } catch (error) {
        console.error("Erreur lors du fetch", error);
      }
    }
    fetchEvent();
  }, []);
  if (error) return <h1>Désolé il n'y a pas d'évènements </h1>;

  return (
    <>
      {error ? (
        <p>Désolé il n'y a pas d'évènements</p>
      ) : !events ? (
        <p>Chargement en cours...</p>
      ) : (
        <section className="event-list">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          <h1 className="filters">filtre à venir</h1>
        </section>
      )}
    </>
  );
}

export default Events;
