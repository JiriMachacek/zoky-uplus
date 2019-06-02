import React from "react";
import { shallow } from "enzyme";

import { formatStory, List } from "./List";

describe("<List />", () => {
  it("renders without props and children", () => {
    const wrapper = shallow(<List />);
    expect(wrapper).toBeTruthy();
  });
});

describe("formatStory", () => {
  it("returns empty string", () => {
    expect(formatStory("")).toEqual("");
  });

  it("returns same string", () => {
    const str = "returns same string";
    expect(formatStory(str)).toEqual(str);
  });

  it("returns first 200 chars", () => {
    const str =
      "returns same string string returns same string string returns same string string returns same string string returns same string string returns same string string returns same string string returns same string string returns same string string returns same string string returns same string string returns same string string returns same string string ";
    const output =
      "returns same string string returns same string string returns same string string returns same string string returns same string string...";
    expect(formatStory(str)).toEqual(output);
  });
});
