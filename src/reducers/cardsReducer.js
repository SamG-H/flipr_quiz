export const cardsReducer = (state = [], action) => {
  switch(action.type){
      case 'FETCH_CARDS':
        return action.payload
      case 'ADD_CARD':
        return action.payload
      default:
        return state
  }
}