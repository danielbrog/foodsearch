const initialState = {};
const addRestaurant = (state, restaurant) => {
  return {
    ...state,
    [restaurant.id]: restaurant,
  };
};

export default function restaurants(state = initialState, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return addRestaurant(state, action.restaurant);
    case "DELETE_RESTAURANT":
      return {
        ...state,
        [action.id]: undefined,
      };
    case "RESET_RESTAURANTS":
      return initialState;
    default:
      return state;
  }
}
