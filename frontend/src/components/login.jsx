import { useState } from "react";
import "./login.css";
import API from "../api/api";

import { toast } from "react-toastify";

function Login({ onRegister, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/auth/login", {
        username,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Login successful!");

      onLogin();
    } catch (error) {
      console.error(error);

      toast.error("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login Page</h2>

        <form onSubmit={handleSubmit}>
          <label>Username:</label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password:</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>
        </form>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onRegister();
          }}
        >
          New user? Register here
        </a>
      </div>
    </div>
  );
}

export default Login;