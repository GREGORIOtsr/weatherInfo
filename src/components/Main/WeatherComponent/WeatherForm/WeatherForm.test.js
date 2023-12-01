import React from "react";
import { shallow } from "enzyme";
import Form from "./WeatherForm";

describe("Form", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
  });
});
