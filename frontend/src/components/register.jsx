import { useState } from "react";
import "./register.css";
import API from "../api/api";

function Register({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/auth/register", {
        username,
        password,
        email,
        fullName,
      });

      alert(response.data.message);

      onLogin();
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Registration failed"
      );
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">

        <h2>Registration</h2>

        <form onSubmit={handleSubmit}>

          <label>Username:</label>

          <input
            type="text"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            required
          />

          <label>Password:</label>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <label>Email:</label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />

          <label>Full Name:</label>

          <input
            type="text"
            value={fullName}
            onChange={(e) =>
              setFullName(e.target.value)
            }
            required
          />

          <button type="submit">
            Register
          </button>

        </form>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          Already have an account? Login here
        </a>

      </div>
    </div>
  );
}

export default Register;