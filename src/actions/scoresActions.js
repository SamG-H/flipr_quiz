export const fetchScores = () => {
  return dispatch => {
      fetch('http://localhost:3000/scores')
      .then(resp => resp.json())
      .then(scores => dispatch({ type: 'FETCH_SCORES', payload: scores}))
  }
}

export const createScore = (score) => {
  return dispatch => {
    fetch(`http://localhost:3000/scores/`, {
      method: "POST",
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
    },
    body: JSON.stringify(score)
  })
      .then(resp => resp.json())
      .then(score => {(console.log(score))})
    }
  }

