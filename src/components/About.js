import React from "react";
import indexCard from "../images/index_card.png";

export default function About() {
  return (
    <div className="has-text-centered">
      <h1 className="is-size-1">Why I Made Flipr Quiz</h1>
      <p className="is-size-4">
        I wanted to create a flashcard app that was clean, easy-to-use, and
        allowed me to quiz myself. All of the other flashcard apps I have used
        are bloated with unnecessary features.
      </p>
      <img src={indexCard} alt="index card" />
    </div>
  );
}
