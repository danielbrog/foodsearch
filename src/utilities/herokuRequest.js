import { addRestaurant } from "../actions/restaurants";

const herokuCitySearch = (city) => {
  const url = "https://opentable.herokuapp.com/api/restaurants?city=" + city;
  return fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((err) => {
      return { error: err };
    });
};

const herokuCitySearchRemainder = (city, pageCount, dispatch) => {
  const url = "https://opentable.herokuapp.com/api/restaurants?city=" + city;
  for (var i = 2; i <= pageCount; i++) {
    fetch(url + "&page=" + i)
      .then((res) => res.json())
      .then((json) => {
        json.restaurants.map((rest) => dispatch(addRestaurant(rest)));
      });
  }
};

export { herokuCitySearch, herokuCitySearchRemainder };
