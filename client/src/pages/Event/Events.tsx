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
  if (error || !events) return <h1>Désolé il n'y a pas d'évènements </h1>;

  useEffect(() => {
    const fetchEventsFiltered = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/events?search=${encodeURIComponent(search)}`,
        );
        if (!res.ok) {
          setError(true);
          return;
        }
        const events = await res.json();
        setEvents(events);
      } catch (error) {
        console.error("Erreur lors du fetch", error);
      }
    };

    fetchEventsFiltered();
  }, [search]);

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
          placeholder="Trouver votre évènement, votre bar ou votre groupe de musique"
        />
      </section>
      <section className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>
    </>
  );
}

export default Events;
