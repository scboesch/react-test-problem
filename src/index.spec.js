import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import Button from "./index";

it("Button text value after click", () => {
  // Render a checkbox with label in the document
  const buttonComponent = shallow(<Button count={1} />);

  expect(buttonComponent.text()).toEqual("1");

  buttonComponent.find("button").simulate("click");

  expect(buttonComponent.text()).toEqual("2");
});
