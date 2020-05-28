import React from "react";
import { useSelector } from "react-redux";
import RestaurantItem from "./RestaurantItem";
import { connect } from "react-redux";

const RestaurantList = () => {
  const restaurants = useSelector((state) => state.restaurants);
  const filter = useSelector((state) => state.filter);

  const filteredRestaurants = Object.keys(restaurants).filter((id) => {
    return (
      restaurants[id].name.toLowerCase().includes(filter.toLowerCase()) ||
      restaurants[id].area.includes(filter) ||
      restaurants[id].address.includes(filter)
    );
  });

  return (
    <div className="restaurant__items">
      {filteredRestaurants.map((restaurantID) => {
        return <RestaurantItem restaurant={restaurants[restaurantID]} />;
      })}
    </div>
  );
};

export default connect()(RestaurantList);
