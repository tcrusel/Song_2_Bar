import EventParticipation from "../components/EventParticipation/EventParticipationCarousel";

function TestEventParticipation() {
  // Simule un user_id (ex: 12) en ajoutant le paramètre dans l'URL de test
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Test EventParticipation</h1>
      <EventParticipation userId={userInfo.id} />
    </div>
  );
}

export default TestEventParticipation;
