import React from "react";
import { useSelector } from "react-redux";
import RestaurantItem from "./RestaurantItem";
import { connect } from "react-redux";
import getRestaurants from "../selectors/restaurantSelector";

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
    <div>
      <div className="content">LIST</div>
      <table className="restaurant-table">
        <tbody>
          <tr>
            <th>Image</th>
            <th>Restaurant Name</th>
            <th>Price</th>
            <th>Address</th>
            <th>Area</th>
            <th>Phone Number</th>
          </tr>
          {filteredRestaurants.map((restaurantID) => {
            return <RestaurantItem restaurant={restaurants[restaurantID]} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default connect()(RestaurantList);
