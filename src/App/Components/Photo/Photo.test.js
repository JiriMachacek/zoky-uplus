import React from "react";
import { shallow } from "enzyme";

import { Photo } from "./Photo";

describe("<Photo />", () => {
  it("renders without props and children", () => {
    const wrapper = shallow(<Photo />);
    expect(wrapper).toBeTruthy();
  });
});
