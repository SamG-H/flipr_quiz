import React from "react";
import { connect } from "react-redux";
import Stacks from "../components/Stacks";

function StackContainer({ stacks }) {
  if (!stacks) {
    return (
      <div className="has-text-centered">
        <h1 className="is-size-1">Review Stacks</h1>
        <p className="is-size-5 has-text-danger">
          Failed to fetch stacks. Refresh page.
        </p>
      </div>
    );
  }
  return (
    <div className="has-text-centered">
      <h1 className="is-size-1">Review Stacks</h1>
      <Stacks />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stacks: state.stacks,
  };
};

export default connect(mapStateToProps)(StackContainer);
