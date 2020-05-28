import { createSelector } from "reselect";

const restaurantsSelector = (state) => state.restaurants;
//const searchSelector = state => state.searchFilter

export const getRestaurants = createSelector(restaurantsSelector);
