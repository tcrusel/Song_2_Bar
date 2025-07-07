import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link, useParams } from "react-router";
import Participate from "../../components/Participate/Participate";
import "../../assets/_variables.css";
import "leaflet/dist/leaflet.css";
import "./EventDetails.css";
import { format, isToday } from "date-fns";
import { fr } from "date-fns/locale";
import type { EventDetailsProps } from "../../types/Event";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState<EventDetailsProps | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchEvent() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/events/${id}`);
        if (!res.ok) {
          setError(true);
          return;
        }
        const event = await res.json();
        setEvent(event);
      } catch (error) {
        console.error("Erreur lors du fetch", error);
      }
    }

    fetchEvent();
  }, [id]);

  if (error) return <p>Evènement introuvable</p>;
  if (!event) return <p>Chargement en cours...</p>;

  const eventDate = new Date(event.date);
  const formattedDateText = isToday(eventDate)
    ? `Aujourd'hui le ${format(eventDate, "d MMMM yyyy", { locale: fr })}`
    : format(eventDate, "d MMMM yyyy", { locale: fr });

  return (
    <>
      {error ? (
        <p>Evènement introuvable</p>
      ) : !event ? (
        <p>Chargement en cours...</p>
      ) : (
        <section className="event-details">
          <article className="event-header">
            <div className="header-style">
              <p className="music-style bold">{event.music_style}</p>
            </div>
            <h1>{event.music_group_name}</h1>
            <img
              className="poster-event"
              src={event.image}
              alt={event.bar_name}
            />
            <div className="date">
              <div className="date-icon">
                <img src="/event_icon/calendar.png" alt="calendar-icon" />
              </div>
              <p className={"date-event bold white"}>{formattedDateText}</p>
            </div>
            <div className="hour">
              <img
                src="/event_icon/clock.png"
                alt="clock-icon"
                className="hour-icon"
              />
              <p className="hour-event white">
                de {event.start_time} à {event.end_time}
              </p>
            </div>
            <div className="participate">
              <Participate userId={10} eventId={30} />
            </div>
            <div className="bar">
              <div className="localisation-icon">
                <img
                  src="/event_icon/localisation.png"
                  alt="localisation-icon"
                />
              </div>
              <p className={"bar-name bold white"}>{event.bar_name}</p>
            </div>
            <div className={"bar-adress white"}>
              <p>{event.address}</p>
              <p>
                {event.postcode} {event.city}
              </p>
            </div>
          </article>
          <div className="googlemap">
            <MapContainer
              center={[event.latitude, event.longitude]}
              zoom={16}
              className="map-container"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[event.latitude, event.longitude]}>
                <Popup>
                  <strong>{event.bar_name}</strong>
                  <br />
                  {event.music_style}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <article className="description-container">
            <p className="about white">A propos</p>
            <p className="event-description">{event.description}</p>
            <p className="artist white">Les artistes</p>
            <Link
              to={`/groups/${event.music_group_id}`}
              className="groups-name"
            >
              {event.music_group_name}
            </Link>
          </article>
        </section>
      )}
    </>
  );
}

export default EventDetails;
