import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Link, useNavigate, useParams } from "react-router";
import Participate from "../../components/Participate/Participate";
import "../../assets/_variables.css";
import "leaflet/dist/leaflet.css";
import { toast } from "react-toastify";
import LikeButton from "../../components/LikeButton/LikeButton";
import { useAuth } from "../../contexts/AuthContext";
import type { EventType } from "../../types/Event";
import "./EventDetails.css";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState<EventType | null>(null);
  const { auth } = useAuth();
  const navigate = useNavigate();
  const userId = auth?.user.id;
  const eventId = Number(id);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/events/${id}`,
        );
        const event = await res.json();
        setEvent(event);
      } catch (error) {
        console.error("Erreur lors du fetch", error);
        if (error) return <p>Evènement introuvable</p>;
      }
    };
    fetchEvent();
  }, [id]);

  if (!event) return <p>Chargement en cours...</p>;

  const favouriteEvent = async () => {
    if (!auth) {
      navigate("/login", { state: { isloggedToFavouriteEvent: false } });
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/favourite_event`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
          body: JSON.stringify({
            userId,
            eventId,
          }),
        },
      );
      if (response) {
        toast("Cet évènement est maintenant dans vos favoris", {
          type: "success",
        });
      } else {
        throw new Error("Erreur serveur");
      }
    } catch (error) {
      console.error("Erreur lors de la favorisation de l'évènement", error);
      toast("Impossible d'ajouter l'évènement dans votre liste de favoris", {
        type: "error",
      });
      throw error;
    }
  };

  const unfavouriteEvent = async () => {
    if (!auth) {
      navigate("/login", { state: { isloggedToFavouriteBar: false } });
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/favourite_event/${userId}/${eventId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        },
      );
      if (response) {
        toast("Cet évènement a été retiré de vos favoris", {
          type: "info",
        });
      } else {
        throw new Error("Erreur serveur");
      }
    } catch (error) {
      console.error("Erreur lors de la favorisation de l'évènement", error);
      toast("Impossible de retirer l'évènement' de votre liste de favoris", {
        type: "error",
      });
      throw error;
    }
  };
  return (
    <div className="event-details">
      <div className="return-button-container">
        <button
          type="button"
          className="return-button"
          onClick={() => navigate(-1)}
        >
          ← Retour
        </button>
      </div>

      <div className="event-name-banner">
        <h1 className="event-name">{event.title}</h1>{" "}
        <div className="favorite-button">
          <LikeButton
            favouriteEvent={favouriteEvent}
            unfavouriteEvent={unfavouriteEvent}
          />
        </div>
      </div>

      <section className="event-info">
        <div className="event-picture">
          <img src={event.image} alt={event.bar_name} />
        </div>
        <div className="description-content">
          <p>{event.description}</p>
        </div>
        <div className="event-meta">
          <div className="bar-title">
            🍺
            <Link to={`/bars/${event.bar_id}`} className={"bar-title bold"}>
                            {event.bar_name}           {" "}
            </Link>
          </div>
          <div className="location">
            📍 {event.address}, {event.postcode} {event.city}
          </div>
          <div className="music-style">🎵 {event.music_style}</div>
          <div className="groups-name">
            🎤
            <Link to={`/groups/${event.music_group_id}`}>
              {" "}
              {event.music_group_name}
            </Link>
          </div>

          <div className="hour-event">
                         🕐 de {event.start_at} à {event.end_at}           {" "}
          </div>

          <div className="participate-wrapper no-background">
            <Participate />
          </div>
        </div>

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
                <strong>{event.event_name}</strong>
                <br />
                {event.music_style}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
    </div>
  );
}

export default EventDetails;
