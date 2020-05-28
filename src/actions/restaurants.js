export const addRestaurant = (restaurant) => ({
  type: "ADD_RESTAURANT",
  restaurant,
});

export const resetRestaurant = () => ({
  type: "RESET_RESTAURANTS",
});

export const deleteRestaurant = (id) => ({
  type: "DELETE_RESTAURANT",
  id,
});
