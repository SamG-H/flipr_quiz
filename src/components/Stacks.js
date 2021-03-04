import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StackForm from "./StackForm";

class Stacks extends Component {
  render() {
    if (this.props.stacks.length === 0) {
      return null;
    }

    return (
      <div>
        {this.props.stacks.data.map((stack) => {
          return (
            <>
              <Link
                to={"/stacks/" + stack.id}
                exact="true"
                className="is-size-2 is-link"
                key={stack.id}
              >
                {stack.attributes.title}
              </Link>
              <br />
            </>
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
