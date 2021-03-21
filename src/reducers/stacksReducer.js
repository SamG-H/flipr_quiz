export const stacksReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_STACKS":
      return action.payload;
    case "ADD_STACK":
      return {
        ...state,
        data: [...state.data, action.payload.data],
      };
    case "DELETE_STACK":
      return {
        data: state.data.filter((stack) => stack.id !== action.payload),
      };
    default:
      return state;
  }
};
