import React, { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="has-text-centered">
      <h1 className="is-size-1">Sign Up</h1>
      <form>
        <div className="field">
          <label className="field-label is-size-4">Username:</label>
          <input
            className="input"
            type="text"
            value={username}
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
      </form>
    </div>
  );
}
