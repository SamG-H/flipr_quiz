import React from "react";
import { connect } from "react-redux";
import Quizzes from "../components/Quizzes";

function QuizContainer({ stacks }) {
  if (stacks.length === 0) {
    return (
      <div className="has-text-centered">
        <h1 className="is-size-1">Take a Quiz</h1>
        <p className="is-size-5 has-text-danger">
          Failed to fetch quizzes. Refresh page.
        </p>
      </div>
    );
  }

  return (
    <div className="has-text-centered">
      <h1 className="is-size-1">Take a Quiz</h1>
      <Quizzes stacks={stacks} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stacks: state.stacks,
  };
};

export default connect(mapStateToProps)(QuizContainer);
