import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { EventType } from "../../types/Event";
import EventCard from "../EventCard/EventCard";
import "./EventParticipation.css";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";

function EventParticipation() {
  const [participations, setParticipations] = useState<EventType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { auth } = useAuth();
  const userId = auth?.user.id;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchParticipations = async () => {
      if (!auth) {
        navigate("/login", { state: { islogged: false } });
        return;
      }
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/participate/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth.token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error("Erreur lors du chargement des participations");
        }

        const participations = await response.json();
        console.log("Événements récupérés :", participations);
        setParticipations(participations);
      } catch (error) {
        setError;
      }
    };

    fetchParticipations();
  }, [userId, auth, navigate]);

  if (error) return <p>Erreur : {error}</p>;
  if (participations.length === 0)
    return <p>Vous ne participez à aucun événement.</p>;

  return (
    <div className="event-participation">
      <h2 className="carousel-title">Mes participations</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        className="event-swiper"
      >
        {participations.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default EventParticipation;
