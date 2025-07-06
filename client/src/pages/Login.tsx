import { type FormEventHandler, useRef } from "react";
import { useNavigate } from "react-router";
import { useUser } from "../contexts/UserContext";

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const noRefresh: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: (emailRef.current as HTMLInputElement).value,
            password: (passwordRef.current as HTMLInputElement).value,
          }),
        },
      );

      if (response.status === 200) {
        const user = await response.json();

        setUser(user);

        navigate("/");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>Connexion utilisateur</h1>
      <section>
        <form onSubmit={noRefresh}>
          <label htmlFor="email">Email</label>
          <input ref={emailRef} type="email" id="email" />
          <label htmlFor="password">Mot de passe</label>
          <input type="password" ref={passwordRef} id="password" />
          <button type="submit">Se connecter</button>
        </form>
      </section>
    </>
  );
}
