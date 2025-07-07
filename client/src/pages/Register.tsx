import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import "./Register.css";
import type { ChangeEventHandler, FormEventHandler } from "react";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const lastnameRef = useRef<HTMLInputElement>(null);
  const firstnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setConfirmPassword(event.target.value);
  };

  const noRefresh: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            lastname: (lastnameRef.current as HTMLInputElement).value,
            firstname: (firstnameRef.current as HTMLInputElement).value,
            email: (emailRef.current as HTMLInputElement).value,
            password,
          }),
        },
      );

      if (response.status === 201) {
        navigate("/login");
      } else {
        toast("Création de compte invalide !", { type: "error" });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="auth">
        <h1>S'inscrire</h1>
        <form className="register-form" onSubmit={noRefresh}>
          <input
            className="input"
            type="text"
            ref={lastnameRef}
            placeholder="Nom"
          />
          <input
            className="input"
            type="text"
            ref={firstnameRef}
            placeholder="Prénom"
          />
          <input
            className="input"
            ref={emailRef}
            type="email"
            placeholder="E-mail"
          />
          <input
            className="input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Mot de passe"
          />
          <input
            className="input"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirmation mot de passe"
          />
          <button className="participate-button" type="submit">
            S'inscrire
          </button>
        </form>
        <h3>
          As-tu un compte ? <Link to={"/login"}>Se connecter</Link>
        </h3>
        <ToastContainer
          position="top-right"
          theme="colored"
          autoClose={2000}
          limit={2}
        />
      </section>
    </>
  );
}

export default Register;
