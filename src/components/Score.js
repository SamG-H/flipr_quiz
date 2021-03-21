import React from "react";

export default function Score({ score, possible, resetForm }) {
  let className = "";
  const percentage = parseInt((score / possible) * 100);
  if (percentage >= 90) {
    className = " has-text-success";
  } else if (percentage > 70) {
    className = " has-text-warning";
  } else {
    className = " has-text-danger";
  }
  return (
    <div>
      <p className={"is-size-2" + className}>You Scored {percentage}% </p>
      <p className={"is-size-2" + className}>
        {score}/{possible}
      </p>
      <button className="button is-link" onClick={resetForm}>
        Reset Quiz
      </button>
    </div>
  );
}
