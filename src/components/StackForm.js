import React, { useState } from "react";
import { connect } from "react-redux";
import { addStack } from "../actions/stacksActions";

function StackForm({ addStack }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addStack({ title: title });
    setTitle("");
  };

  return (
    <div>
      <h2 className="is-size-2">Add a New Stack</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="field-label is-size-4">Title:</label>
          <div className="control">
            <input
              placeholder="Stack Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              className="input"
              style={{ width: "30%" }}
              required
            />
          </div>
        </div>
        <input type="submit" value="Add Stack" className="button is-link" />
      </form>
    </div>
  );
}

export default connect(null, { addStack })(StackForm);
