import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCards } from "../actions/cardsActions";
import Question from "./Question";
import Score from "./Score";
import CardForm from "./CardForm";

class QuizForm extends Component {
  constructor() {
    super();
    this.state = {
      submitted: false,
      score: 0,
      answers: {},
    };
  }

  componentDidMount() {
    this.props.fetchCards(this.props.match.params.id);
    fetch(`http://localhost:3000/stacks/${this.props.match.params.id}/cards`)
      .then((resp) => resp.json())
      .then((cards) => {
        let answers = {};
        cards.data.forEach((card) => {
          answers[card.id] = {
            content: "",
            isCorrect: false,
          };
        });
        this.setState({
          answers,
        });
      });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    let answers = { ...this.state.answers };
    answers[name] = {
      content: value,
      isCorrect: false,
    };
    this.setState({
      answers,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const score = this.correctQuiz();
    this.setState({
      score: score,
      submitted: true,
    });
  };

  correctQuiz = () => {
    let score = 0;
    let answers = { ...this.state.answers };
    this.props.cards.data.forEach((card) => {
      if (
        answers[card.id].content.toLowerCase() ===
        card.attributes.back.toLowerCase()
      ) {
        score += 1;
        answers[card.id] = {
          ...answers[card.id],
          isCorrect: true,
        };
      }
    });

    this.setState({
      answers,
    });

    return score;
  };

  resetForm = () => {
    let answers = { ...this.state.answers };
    for (let id in answers) {
      answers[id] = {
        content: "",
        isCorrect: false,
      };
    }
    this.setState({
      score: 0,
      submitted: false,
      answers,
    });
  };

  render() {
    if (this.props.cards.length === 0) {
      return null;
    } else if (!this.props.cards.included[0]) {
      //find our current stack based on our route params
      const stack = this.props.stacks.data.filter(
        (element) => element.id === this.props.match.params.id
      );
      return (
        <div className="has-text-centered">
          <h1 className="is-size-1 has-text-link">
            {stack[0].attributes.title} Quiz
          </h1>
          <p className="is-size-4 has-text-danger">
            No cards in this stack yet!
          </p>
          <CardForm stackId={this.props.match.params.id} />
        </div>
      );
    } else {
      return (
        <div className="has-text-centered">
          <h1 className="is-size-1 has-text-link">
            {this.props.cards.included[0].attributes.title} Quiz
          </h1>
          {this.state.submitted && (
            <Score
              score={this.state.score}
              possible={this.props.cards.data.length}
              resetForm={this.resetForm}
            />
          )}

          <form onSubmit={this.handleSubmit}>
            {this.props.cards.data.map((card) => {
              return (
                <div key={card.id}>
                  <Question
                    front={card.attributes.front}
                    back={card.attributes.back}
                    id={card.id}
                    isSubmitted={this.state.submitted}
                    isCorrect={
                      this.state.submitted &&
                      this.state.answers[card.id].isCorrect
                    }
                    value={
                      Object.keys(this.state.answers).length === 0 ||
                      !(card.id in this.state.answers)
                        ? ""
                        : this.state.answers[card.id].content
                    }
                    handleChange={this.handleChange}
                  />
                </div>
              );
            })}
            <br />
            <input
              type="submit"
              value="Submit Quiz"
              className="button is-primary"
            />
          </form>
        </div>
      );
    }
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizForm);
