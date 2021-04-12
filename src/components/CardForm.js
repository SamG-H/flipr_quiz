import React, { useState } from "react";
import { connect } from "react-redux";
import { addCard } from "../actions/cardsActions";

function CardForm({ stackId, addCard }) {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCard(stackId, { front, back });
    setFront("");
    setBack("");
  };

  return (
    <div>
      <h2 className="is-size-2">Add a New Card</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="field-label is-size-4">Front:</label>
          <div className="control">
            <input
              placeholder="Front of Card"
              type="text"
              value={front}
              onChange={(e) => setFront(e.target.value)}
              name="front"
              className="input"
              style={{ width: "30%" }}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="field-label is-size-4">Back:</label>
          <div className="control">
            <input
              placeholder="Back of Card"
              type="text"
              value={back}
              onChange={(e) => setBack(e.target.value)}
              name="back"
              className="input"
              style={{ width: "30%" }}
              required
            />
          </div>
        </div>
        <input type="submit" value="Add Card" className="button is-link" />
      </form>
    </div>
  );
}

export default connect(null, { addCard })(CardForm);
