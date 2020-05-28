import React, { useState } from "react";
import { connect } from "react-redux";
import {
  herokuCitySearch,
  herokuCitySearchRemainder,
} from "../utilities/herokuRequest";
import {
  addRestaurant,
  resetRestaurants,
  setFilter,
} from "../actions/restaurants";

const SearchForm = ({ dispatch }) => {
  const [city, setCity] = useState("");
  const [refine, setRefine] = useState("");

  const search = () => {
    dispatch(setFilter(refine));
    herokuCitySearch(city).then((data) => {
      dispatch(resetRestaurants());
      data.restaurants.map((rest) => dispatch(addRestaurant(rest)));
      const pageCount = Math.ceil(data.total_entries / data.per_page);
      if (pageCount > 1) {
        herokuCitySearchRemainder(city, pageCount, dispatch);
      }
    });
  };

  const refineSearch = () => {
    dispatch(setFilter(refine));
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
      <button type="button" onClick={search}>
        Search Restaurants
      </button>
      <input
        type="search"
        name="Refine Search"
        placeholder="Name / Street / Area"
        onChange={(e) => setRefine(e.target.value)}
      ></input>
      <button type="button" onClick={refineSearch}>
        Refine Search
      </button>
    </div>
  );
};

export default connect()(SearchForm);
