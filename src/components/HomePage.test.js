import React from "react";
import HomePage from "./HomePage";
import ShallowRenderer from "react-test-renderer/shallow";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import mockStore from "../mocks/mockStore.json";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import { mount } from "enzyme";

import { axe, toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);

const configStore = configureStore([]);

describe("Homepage tests", () => {
  const store = configStore(mockStore);

  test("HomePage renders with a title", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<HomePage />);
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });

  it("should pass accessibility tests", async () => {
    const wrapper = mount(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    const results = await axe(wrapper.getDOMNode());
    expect(results).toHaveNoViolations();
  });
});
