import React, { useState } from "react";
import "../Card.css";

export default function Card({ front, back }) {
  const [isToggleOn, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!isToggleOn);
  };

  return (
    <div onClick={() => handleClick()}>
      {isToggleOn ? (
        <div className="card">{front}</div>
      ) : (
        <div className="card clicked">{back}</div>
      )}
    </div>
  );
}
