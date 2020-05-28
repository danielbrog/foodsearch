export const addRestaurant = (restaurant) => ({
  type: "ADD_RESTAURANT",
  restaurant,
});

export const resetRestaurants = () => ({
  type: "RESET_RESTAURANTS",
});

export const deleteRestaurant = (id) => ({
  type: "DELETE_RESTAURANT",
  id,
});

export const setFilter = (filter) => ({
  type: "SET_FILTER",
  filter,
});
