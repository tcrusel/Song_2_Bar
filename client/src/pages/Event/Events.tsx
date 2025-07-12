import EventCard from "../../components/EventCard/EventCard";
import "./Events.css";
import { useEffect, useState } from "react";
import type { EventType } from "../../types/Event";

function Events() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

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
  if (!events) {
    <p>Chargement en cours...</p>;
  }

  return (
    <>
      <section className="filters-searchbar">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          placeholder="Trouver votre évènement, vcotre bar ou votre groupe de musique"
        />
      </section>
      <section className="event-list">
        {events
          .filter((event) => {
            return (
              event.title.toLowerCase().includes(search.toLowerCase()) ||
              event.bar_name.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
      </section>
    </>
  );
}

export default Events;
