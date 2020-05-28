import { createSelector } from "reselect";

const restaurantsSelector = (state) => state.restaurants;
const filterSelector = (state) => state.filter;

export const getRestaurants = () =>
  createSelector(
    [restaurantsSelector, filterSelector],
    (restaurants, filter) => {
      return restaurants.filter((restaurant) => {
        return (
          restaurant.name.contains(filter) ||
          restaurant.area.contains(filter) ||
          restaurant.address.conains(filter)
        );
      });
    }
  );
