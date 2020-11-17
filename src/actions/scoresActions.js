export const fetchScores = () => {
  return dispatch => {
      fetch('http://localhost:3000/scores')
      .then(resp => resp.json())
      .then(scores => dispatch({ type: 'FETCH_SCORES', payload: scores}))
  }
}
