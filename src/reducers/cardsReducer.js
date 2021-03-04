export const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CARDS":
      return action.payload;
    case "ADD_CARD":
      return {
        ...state,
        data: [...state.data, action.payload.data],
      };
    default:
      return state;
  }
};
