import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCards } from "../actions/cardsActions";
import { deleteStack } from "../actions/stacksActions";
import Card from "./Card";
import CardForm from "./CardForm";
import { Link } from "react-router-dom";

function Stack({
  cards,
  stacks,
  fetchCards,
  deleteStack,
  match: { params },
  history,
}) {
  useEffect(() => {
    fetchCards(params.id);
  }, [fetchCards, params.id]);

  const handleClick = () => {
    deleteStack(params.id, history);
  };

  if (cards.length === 0) {
    return null;
  } else if (!cards.included[0]) {
    // find stack
    const stack = stacks.data.filter((element) => element.id === params.id);
    return (
      <div className="has-text-centered">
        <h1 className="is-size-2 has-text-danger">
          No cards in {stack[0].attributes.title} yet!
        </h1>
        <button className="button is-danger m-6" onClick={handleClick}>
          Delete this stack
        </button>
        <CardForm stackId={params.id} />
        <Link to="/stacks" exact className="is-size-2 is-link">
          Go back to stacks
        </Link>
      </div>
    );
  }

  return (
    <div className="has-text-centered">
      <h1 className="is-size-2">{cards.included[0].attributes.title}</h1>
      <div className="cardsDiv">
        {cards.data.map(({ attributes, id }) => {
          return (
            <Card
              front={attributes.front}
              back={attributes.back}
              id={id}
              key={id}
            />
          );
        })}
      </div>
      <button className="button is-danger m-6" onClick={handleClick}>
        Delete this stack
      </button>
      <CardForm stackId={params.id} />
    </div>
  );
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
