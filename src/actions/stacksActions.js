export const fetchStacks = () => {
  return dispatch => {
      fetch('http://localhost:3000/stacks')
      .then(resp => resp.json())
      .then(stacks => dispatch({ type: 'FETCH_STACKS', payload: stacks.data}))
  }
}
