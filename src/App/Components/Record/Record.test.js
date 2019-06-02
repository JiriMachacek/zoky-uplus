import React from "react";
import { shallow } from "enzyme";

import { Record } from "./Record";

describe("<Record />", () => {
  it("renders without props and children", () => {
    const wrapper = shallow(<Record />);
    expect(wrapper).toBeTruthy();
  });
});
