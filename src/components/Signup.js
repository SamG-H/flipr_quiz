import React, { useState } from "react";

export default function Signup() {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/users/`, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
      });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="has-text-centered">
      <h1 className="is-size-1">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="field-label is-size-4">Username:</label>
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "30%" }}
          ></input>
        </div>
        <div className="field">
          <label className="field-label is-size-4">Password:</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "30%" }}
          ></input>
        </div>
        <input type="submit" value="Sign up" className="button is-link"></input>
      </form>
    </div>
  );
}
