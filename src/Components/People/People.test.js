import React from "react";
import ReactDOM from "react-dom";
import PeopleCard from "./PeopleCard.js";
import fetchMock from "fetch-mock";
import { shallow, mount } from "enzyme";
import mockPeople from "../Stubs/PeopleData.json";
import Helper from "../Helpers/helper.js";

describe("People", () => {

  it("has a class of peopleCardInfo", () => {
    const mockClick = jest.fn();
    const wrapper = shallow(
      <PeopleCard data={mockPeople} addFavorite={mockClick} favorites={[]} />
    );

    expect(wrapper.find(".peopleCardInfo").length).toBe(1);
  });

  it("evaluates the number of card elements ", () => {
    const mockClick = jest.fn();
    const wrapper = shallow(
      <PeopleCard data={mockPeople} addFavorite={mockClick} favorites={[]} />
    );

    expect(wrapper.find("p").length).toBe(4);
  });

  it("checks to see that favorites function has been called", () => {
    const mockClick = jest.fn();
    const wrapper = shallow(
      <PeopleCard data={mockPeople} addFavorite={mockClick} favorites={[]} />
    );

    const button = wrapper.find(".peopleCardInfo").children().first();
    button.simulate("click");
    expect(mockClick).toBeCalled();
  });
});
