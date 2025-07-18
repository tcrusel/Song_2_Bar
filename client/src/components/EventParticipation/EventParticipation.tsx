import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { EventType } from "../../types/Event";
import EventCard from "../EventCard/EventCard";
import "./EventParticipation.css";

function EventParticipation() {
  const { user_id } = useParams<{ user_id: string }>();
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchParticipations = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/participate/${user_id}`,
        );

        if (!response.ok) {
          throw new Error("Erreur lors du chargement des participations");
        }

        const data = await response.json();
        setEvents(data);
      } catch (error) {
        setError;
      } finally {
        setLoading(false);
      }
    };

    fetchParticipations();
  }, [user_id]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (events.length === 0) return <p>Vous ne participez à aucun événement.</p>;

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
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <EventCard event={event} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default EventParticipation;
