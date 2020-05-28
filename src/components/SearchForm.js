import React, { useState } from "react";
import { connect } from "react-redux";
import herokuCitySearch from "../utilities/herokuRequest";
import { addRestaurant } from "../actions/restaurants";

const SearchForm = ({ dispatch }) => {
  const [city, setCity] = useState("");
  const searchCities = () => {
    herokuCitySearch(city).then((data) => {
      data.restaurants.map((rest) => dispatch(addRestaurant(rest)));
    });
  };

  return (
    <div>
      <div className="content">Search Restaurants</div>
      <input
        type="search"
        name="Search Cities"
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
      ></input>
      <button type="button" onClick={searchCities}>
        Search Restaurants
      </button>
      <input
        type="search"
        name="Refine Search"
        placeholder="Name / Street / Area"
      ></input>
    </div>
  );
};

export default connect()(SearchForm);
