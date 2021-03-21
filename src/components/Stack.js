import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCards } from "../actions/cardsActions";
import { deleteStack } from "../actions/stacksActions";
import Card from "./Card";
import CardForm from "./CardForm";
import { Link } from "react-router-dom";

class Stack extends Component {
  componentDidMount() {
    this.props.fetchCards(this.props.match.params.id);
  }

  handleClick = () => {
    const { history } = this.props;
    this.props.deleteStack(this.props.match.params.id, history);
  };

  render() {
    if (this.props.cards.length === 0) {
      return null;
    } else if (!this.props.cards.included[0]) {
      // find stack
      const stack = this.props.stacks.data.filter(
        (element) => element.id === this.props.match.params.id
      );
      return (
        <div className="has-text-centered">
          <h1 className="is-size-2 has-text-danger">
            No cards in {stack[0].attributes.title} yet!
          </h1>
          <button className="button is-danger m-6" onClick={this.handleClick}>
            Delete this stack
          </button>
          <CardForm stackId={this.props.match.params.id} />
          <Link to="/stacks" exact className="is-size-2 is-link">
            Go back to stacks
          </Link>
        </div>
      );
    }

    return (
      <div className="has-text-centered">
        <h1 className="is-size-2">
          {this.props.cards.included[0].attributes.title}
        </h1>
        <div className="cardsDiv">
          {this.props.cards.data.map((card) => {
            return (
              <Card
                front={card.attributes.front}
                back={card.attributes.back}
                id={card.id}
                key={card.id}
              />
            );
          })}
        </div>
        <button className="button is-danger m-6" onClick={this.handleClick}>
          Delete this stack
        </button>
        <CardForm stackId={this.props.match.params.id} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    stacks: state.stacks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: (id) => dispatch(fetchCards(id)),
    deleteStack: (id, history) => dispatch(deleteStack(id, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stack);
