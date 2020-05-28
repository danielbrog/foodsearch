const initialState = "";
const setFilter = (filter) => {
  return filter;
};

export default function filter(state = initialState, action) {
  switch (action.type) {
    case "SET_FILTER":
      return setFilter(action.filter);
    default:
      return state;
  }
}
