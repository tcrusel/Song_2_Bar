import type { ChangeEventHandler, FormEventHandler } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

function Register() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const passwordChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };
  const confirmPasswordChange: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setConfirmPassword(event.target.value);
  };
  const Submit: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users`,
        {
          method: "post",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            email: (emailRef.current as HTMLInputElement).value,
            password,
          }),
        },
      );

      if (response.status === 201) {
        navigate("/login");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={Submit}>
      <div>
        <label htmlFor="email">Email</label>{" "}
        <input ref={emailRef} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>{" "}
        <input
          type="password"
          id="password"
          value={password}
          onChange={passwordChange}
        />{" "}
        {password.length >= 8 ? "✅" : "❌"} {`length: ${password.length} >=8`}
      </div>
      <div>
        <label htmlFor="confirm-password">confirm password</label>{" "}
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={confirmPasswordChange}
        />{" "}
        {password === confirmPassword ? "✅" : "❌"}
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default Register;
