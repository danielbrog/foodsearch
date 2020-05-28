import React from "react";
import SearchForm from "./SearchForm";
import RestaurantListContainer from "../container/RestaurantListContainer";

const HomePage = () => (
  <div>
    <div className="content">HomePage</div>
    <SearchForm />
    <RestaurantListContainer />
  </div>
);

export default HomePage;
