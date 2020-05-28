import React from "react";
import SearchForm from "./SearchForm";
import RestaurantList from "./RestaurantList";

const HomePage = () => (
  <div>
    <div className="content">HomePage</div>
    <SearchForm />
    <RestaurantList />
  </div>
);

export default HomePage;
