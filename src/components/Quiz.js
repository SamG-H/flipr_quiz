import React from "react";
import { Link } from "react-router-dom";

export default function Quiz({ id, title }) {
  return (
    <>
      <Link to={"/quizzes/" + id} exact className="is-size-2 is-link">
        {title}
      </Link>
      <br />
    </>
  );
}
