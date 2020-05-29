import React from "react";
import RestaurantItem from "./RestaurantItem";
import renderer from "react-test-renderer";
import mockRestaurant from "../mocks/restaurant.json";

test("RestaurantItem renders", () => {
  const testRenderer = renderer
    .create(<RestaurantItem restaurant={mockRestaurant} />)
    .toJSON();
  expect(testRenderer).toMatchSnapshot();
});
