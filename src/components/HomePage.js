import React from "react";
import SearchForm from "./SearchForm";
import RestaurantList from "./RestaurantList";

const HomePage = () => (
  <div className="content">
    <div className="main__title">Find Restaurants in your city!</div>
    <SearchForm />
    <RestaurantList />
  </div>
);

export default HomePage;
