import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StackForm from "./StackForm";

function Stacks({ stacks }) {
  const findAuthor = (stackUserId) => {
    let author = "";
    stacks.included.forEach((user) => {
      if (user.id === stackUserId) {
        author = user.attributes.name;
      }
    });
    return author;
  };
  if (stacks.length === 0) {
    return null;
  }

  return (
    <div>
      {stacks.data.map((stack) => {
        const author = findAuthor(stack.relationships.user.data.id);
        return (
          <div key={stack.id}>
            <Link
              to={"/stacks/" + stack.id}
              exact="true"
              className="is-size-2 is-link"
            >
              {stack.attributes.title} from {author}
            </Link>
            <br />
          </div>
        );
      })}
      <br />
      <br />
      <br />
      <StackForm />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stacks: state.stacks,
  };
};

export default connect(mapStateToProps)(Stacks);
