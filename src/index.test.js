// @flow
import { mount, configure } from "enzyme";
import { Index } from "./index";
import React from "react"

// setup file
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("Index", () => {
  it("shows 'Hello world?'", () => {
    const index = mount(<Index></Index>);
    expect(index.text()).toEqual("Hello world?");
  });
});

it("dummy test", () => {
  expect(true).toEqual(true);
});
