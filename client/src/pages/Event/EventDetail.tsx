import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useParams } from "react-router";

import "leaflet/dist/leaflet.css";
import { format, isToday } from "date-fns";
import { fr } from "date-fns/locale";
import "./EventDetail.css";

type Detail = {
  title: string;
  music_style: string;
  bar_name: string;
  image: string;
  hour_only: number;
  latitude: number;
  longitude: number;
  description: string;
  date: number;
  address: string;
  postcode: string;
  city: string;
};

function EventDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState<Detail | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function showDetail() {
      try {
        const res = await fetch(`http://localhost:3310/event/${id}`);
        if (!res.ok) {
          setError(true);
          return;
        }
        const data = await res.json();
        setDetail(data);
      } catch (error) {
        console.error("Erreur lors du fetch", error);
      }
    }

    showDetail();
  }, [id]);

  if (error) return <p>Evènement introuvable</p>;
  if (!detail) return <p>Chargement en cours...</p>;
  const eventDate = new Date(detail.date);
  const formattedDateText = isToday(eventDate)
    ? `Aujourd'hui le ${format(eventDate, "d MMMM yyyy", { locale: fr })}`
    : format(eventDate, "d MMMM yyyy", { locale: fr });

  const formattedHour = `${detail.hour_only.toString().padStart(2, "0")}h00`;

  return (
    <main className="event-details">
      <section className="event-header">
        <div className="header-style">
          <p className="music-style bold">{detail.music_style}</p>
        </div>
        <h1>{detail.title}</h1>

        <img
          className="poster-event"
          src={detail.image}
          alt={detail.bar_name}
        />

        <div className="date">
          <div className="date-icon">
            <img src="/event_icon/agenda.png" alt="agenda-icon" />
          </div>
          <p className={"date-event bold white"}>{formattedDateText}</p>
        </div>
        <div className="hour">
          <img
            src="/event_icon/horloge.png"
            alt="hour-icon"
            className="hour-icon"
          />

          <p className="hour-event white"> à {formattedHour}</p>
        </div>
        <p className="participate">Je participe !</p>
        <div className="bar">
          <div className="localisation-icon">
            <img src="/event_icon/localisation.png" alt="localisation-icon" />
          </div>
          <p className={"bar-name bold white"}>{detail.bar_name}</p>
        </div>
        <div className={"bar-adress white"}>
          <p>{detail.address}</p>
          <p>
            {detail.postcode} {detail.city}
          </p>
        </div>
      </section>
      <div className="googlemap">
        <MapContainer
          center={[detail.latitude, detail.longitude]}
          zoom={16}
          style={{ height: "400px", width: "100%", marginTop: "1rem" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[detail.latitude, detail.longitude]}>
            <Popup>
              <strong>{detail.bar_name}</strong>
              <br />
              {detail.music_style}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <section className="description-container">
        <p className="about white">A propos</p>
        <p className="event-description">{detail.description}</p>
        <p className="artist white">Les artistes</p>
        <p className="groups-name">{detail.title}</p>
      </section>
    </main>
  );
}

export default EventDetail;
