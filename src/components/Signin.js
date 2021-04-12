import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="has-text-centered">
      <h1 className="is-size-1">Sign In</h1>
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
      <p className="is-size-4">Don't have an account?</p>
      <Link to="/signup" className="is-link is-size-4">
        Sign up here!
      </Link>
    </div>
  );
}
