import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchCards } from "../actions/cardsActions";
import Question from "./Question";
import Score from "./Score";
import CardForm from "./CardForm";

function QuizForm({ cards, stacks, fetchCards, match: { params } }) {
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetchCards(params.id);
    fetch(`http://localhost:3000/stacks/${params.id}/cards`)
      .then((resp) => resp.json())
      .then((cards) => {
        let tempAnswers = {};
        cards.data.forEach((card) => {
          tempAnswers[card.id] = {
            content: "",
            isCorrect: false,
          };
        });
        setAnswers(tempAnswers);
      });
  }, [fetchCards, params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let tempAnswers = { ...answers };
    tempAnswers[name] = {
      content: value,
      isCorrect: false,
    };
    setAnswers(tempAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = correctQuiz();
    setScore(score);
    setSubmitted(true);
  };

  const correctQuiz = () => {
    let score = 0;
    let tempAnswers = answers;
    cards.data.forEach((card) => {
      if (
        tempAnswers[card.id].content.toLowerCase() ===
        card.attributes.back.toLowerCase()
      ) {
        score += 1;
        tempAnswers[card.id] = {
          ...answers[card.id],
          isCorrect: true,
        };
      }
    });

    setAnswers(tempAnswers);

    return score;
  };

  const resetForm = () => {
    let tempAnswers = answers;
    for (let id in answers) {
      tempAnswers[id] = {
        content: "",
        isCorrect: false,
      };
    }
    setScore(0);
    setSubmitted(false);
    setAnswers(tempAnswers);
  };

  if (cards.length === 0) {
    return null;
  } else if (!cards.included[0]) {
    //find our current stack based on our route params
    const stack = stacks.data.filter((element) => element.id === params.id);
    return (
      <div className="has-text-centered">
        <h1 className="is-size-1 has-text-link">
          {stack[0].attributes.title} Quiz
        </h1>
        <p className="is-size-4 has-text-danger">No cards in this stack yet!</p>
        <CardForm stackId={params.id} />
      </div>
    );
  } else {
    return (
      <div className="has-text-centered">
        <h1 className="is-size-1 has-text-link">
          {cards.included[0].attributes.title} Quiz
        </h1>
        {submitted && (
          <Score
            score={score}
            possible={cards.data.length}
            resetForm={resetForm}
          />
        )}

        <form onSubmit={handleSubmit}>
          {cards.data.map((card) => {
            return (
              <div key={card.id}>
                <Question
                  front={card.attributes.front}
                  back={card.attributes.back}
                  id={card.id}
                  isSubmitted={submitted}
                  isCorrect={submitted && answers[card.id].isCorrect}
                  value={
                    Object.keys(answers).length === 0 || !(card.id in answers)
                      ? ""
                      : answers[card.id].content
                  }
                  handleChange={handleChange}
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
