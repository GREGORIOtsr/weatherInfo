import React from "react";
import { shallow } from "enzyme";
import WeatherError from "./WeatherError";

describe("WeatherError", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WeatherError />);
    expect(wrapper).toMatchSnapshot();
  });
});
