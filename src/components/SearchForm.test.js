import React from "react";
import SearchForm from "./SearchForm";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import mockStore from "../mocks/mockStore.json";

const configStore = configureStore([]);

test("SearchForm renders", () => {
  const store = configStore(mockStore);
  const testRenderer = renderer
    .create(
      <Provider store={store}>
        <SearchForm />
      </Provider>
    )
    .toJSON();

  expect(testRenderer).toMatchSnapshot();
});
