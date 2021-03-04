export const stacksReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_STACKS":
      return action.payload;
    case "ADD_STACK":
      return {
        ...state,
        data: [...state.data, action.payload.data],
      };
    default:
      return state;
  }
};
