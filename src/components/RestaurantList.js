import React from "react";
import { useSelector } from "react-redux";

const RestaurantList = () => {
  const restaurants = useSelector((state) => state.restaurants);

  return (
    <div>
      <div className="content">LIST</div>
      {Object.keys(restaurants).map((restaurantID) => {
        console.log(restaurants);
        return <div key={restaurantID}>{restaurants[restaurantID].name}</div>;
      })}
    </div>
  );
};

export default RestaurantList;
