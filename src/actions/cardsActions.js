export const fetchCards = (id) => {
  return dispatch => {
      fetch(`http://localhost:3000/stacks/${id}/cards`)
      .then(resp => resp.json())
      .then(cards => dispatch({ type: 'FETCH_CARDS', payload: cards}))
  }
}