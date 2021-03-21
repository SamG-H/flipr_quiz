import React from "react";

export default function Question({
  front,
  back,
  id,
  handleChange,
  isCorrect,
  isSubmitted,
  value,
}) {
  let className = "";
  if (isSubmitted && isCorrect) {
    className = " is-success";
  } else if (isSubmitted) {
    className = " is-danger";
  }
  return (
    <div className="field mb-6">
      <label className="label is-size-3">{front}</label>
      <div className="control">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          name={id}
          className={"input" + className}
          style={{ width: "30%" }}
        />
      </div>

      {isSubmitted && !isCorrect ? (
        <p className="is-size-3 help is-danger">{back}</p>
      ) : null}
    </div>
  );
}
