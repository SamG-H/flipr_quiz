import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" exact className="navbar-item">
        Home
      </NavLink>
      <NavLink to="/about" exact className="navbar-item">
        About
      </NavLink>
      <NavLink to="/quizzes" exact className="navbar-item">
        Quizzes
      </NavLink>
      <NavLink to="/stacks" exact className="navbar-item">
        Stacks
      </NavLink>
      <NavLink to="/signin" exact className="navbar-item">
        Sign In
      </NavLink>
    </nav>
  );
}
