import React from "react";
import "../Card.css";
import indexCard from "../images/index_card.png";

export default function Home() {
  return (
    <div className="has-text-centered">
      <h1 className="is-size-1">Welcome to Flipr Quiz - Flip Your Way</h1>
      <p className="is-size-4">
        Create stacks of flashcards, review them, and quiz your knowledge!
      </p>
      <img src={indexCard} alt="index card" />
    </div>
  );
}
