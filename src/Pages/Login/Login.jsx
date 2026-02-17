import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css"

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [serverMessage, setServerMessage] = useState("");
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("login api from the backend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("token", result.token);
        setToken(result.token);
      } else {
        setServerMessage(result.message);
      }
    } catch (error) {
      setServerMessage("Something went wrong.");
    }
  };

  // This is want will take the user to the login
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <div className={styles.login}>
      <h2>Login</h2>

      <form  className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Login</button>
        <p>
          Don’t have an account?{" "}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Signup
          </NavLink>
        </p>
      </form>

      {serverMessage && <p>{serverMessage}</p>}
    </div>
  );
}

export default Login;
