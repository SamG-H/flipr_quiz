import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StackForm from "./StackForm";

class Stacks extends Component {
  findAuthor = (stackUserId) => {
    let author = "";
    this.props.stacks.included.forEach((user) => {
      if (user.id === stackUserId) {
        author = user.attributes.name;
      }
    });
    return author;
  };
  render() {
    if (this.props.stacks.length === 0) {
      return null;
    }

    return (
      <div>
        {this.props.stacks.data.map((stack) => {
          const author = this.findAuthor(stack.relationships.user.data.id);
          console.log("author: ", author);
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
}

const mapStateToProps = (state) => {
  return {
    stacks: state.stacks,
  };
};

export default connect(mapStateToProps)(Stacks);
