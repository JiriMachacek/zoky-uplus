import React from "react";
import { shallow } from "enzyme";

import { Header } from "./Header";

describe("<Header />", () => {
  it("renders without props and children", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeTruthy();
  });
});
