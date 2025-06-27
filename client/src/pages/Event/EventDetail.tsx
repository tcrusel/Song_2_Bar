import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useParams } from "react-router";
import "../../assets/_variables.css";
import "leaflet/dist/leaflet.css";
import { format, isToday } from "date-fns";
import { fr } from "date-fns/locale";
import "./EventDetail.css";
import type { EventInterface } from "../../types/Eventdetail";

function EventDetail() {
  const { id } = useParams();
  const [eventDetail, setEventDetail] = useState<EventInterface | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function showDetail() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/event/${id}`);
        if (!res.ok) {
          setError(true);
          return;
        }
        const detail = await res.json();
        setEventDetail(detail);
      } catch (error) {
        console.error("Erreur lors du fetch", error);
      }
    }

    showDetail();
  }, [id]);

  if (error) return <p>Evènement introuvable</p>;
  if (!eventDetail) return <p>Chargement en cours...</p>;
  const eventDate = new Date(eventDetail.date);
  const formattedDateText = isToday(eventDate)
    ? `Aujourd'hui le ${format(eventDate, "d MMMM yyyy", { locale: fr })}`
    : format(eventDate, "d MMMM yyyy", { locale: fr });

  const formattedHour = `${eventDetail.hour_only.toString().padStart(2, "0")}h00`;
  
  return (
    <main className="event-details">
      <section className="event-header">
        <div className="header-style">
          <p className="music-style bold">{eventDetail.music_style}</p>
        </div>
        <h1>{eventDetail.title}</h1>

        <img
          className="poster-event"
          src={eventDetail.image}
          alt={eventDetail.bar_name}
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

          <p className="hour-event white"> à {formattedHour}</p>
        </div>
        <p className="participate">Je participe !</p>
        <div className="bar">
          <div className="localisation-icon">
            <img src="/event_icon/localisation.png" alt="localisation-icon" />
          </div>
          <p className={"bar-name bold white"}>{eventDetail.bar_name}</p>
        </div>
        <div className={"bar-adress white"}>
          <p>{eventDetail.address}</p>
          <p>
            {eventDetail.postcode} {eventDetail.city}
          </p>
        </div>
      </section>
      <div className="googlemap">
        <MapContainer
          center={[eventDetail.latitude, eventDetail.longitude]}
          zoom={16}
          style={{ height: "400px", width: "100%", marginTop: "1rem" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[eventDetail.latitude, eventDetail.longitude]}>
            <Popup>
              <strong>{eventDetail.bar_name}</strong>
              <br />
              {eventDetail.music_style}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <section className="description-container">
        <p className="about white">A propos</p>
        <p className="event-description">{eventDetail.description}</p>
        <p className="artist white">Les artistes</p>
        <p className="groups-name">{eventDetail.title}</p>
      </section>
    </main>
  );
}

export default EventDetail;
