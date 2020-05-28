const herokuCitySearch = (city) => {
  const url = "http://opentable.herokuapp.com/api/restaurants?city=" + city;
  return fetch(url)
    .then((res) => res.json())
    .then((json) => {
      return json;
    })
    .catch((err) => {
      return { error: err };
    });
};

export default herokuCitySearch;
