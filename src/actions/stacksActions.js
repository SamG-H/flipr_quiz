export const fetchStacks = () => {
  return dispatch => {
      fetch('http://localhost:3000/stacks')
      .then(resp => resp.json())
      .then(stacks => dispatch({ type: 'FETCH_STACKS', payload: stacks}))
  }
}

export const addStack = (stack) => {
  return dispatch => {fetch('http://localhost:3000/stacks/', {
    method: 'POST',
    body: JSON.stringify(stack),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(resp => resp.json())
  .then(stacks => dispatch({ type: 'ADD_STACK', payload: stacks}))
}
}