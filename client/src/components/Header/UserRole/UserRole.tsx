import "./UserRole.css";

function UserRole() {
  return (
    <section className="user-choice">
      <button type="button" className="close-user-choice">
        X
      </button>
      <article className="user-choice-contenue">
        <h1>Je suis</h1>
        <button type="button">Spectateur</button>
        <button type="button">Bartender</button>
      </article>
    </section>
  );
}

export default UserRole;
