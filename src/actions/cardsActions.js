export const fetchCards = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/stacks/${id}/cards`)
      .then((resp) => resp.json())
      .then((cards) => {
        console.log(cards);
        dispatch({ type: "FETCH_CARDS", payload: cards });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addCard = (id, card) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/stacks/${id}/cards`, {
      method: "POST",
      body: JSON.stringify(card),
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((cards) => dispatch({ type: "ADD_CARD", payload: cards }))
      .catch((error) => {
        console.log(error);
      });
  };
};
