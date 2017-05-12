import React from "react";
import ReactDOM from "react-dom";
import PlanetCard from "./PlanetCard.js";
import fetchMock from "fetch-mock";
import { shallow, mount } from "enzyme";
import mockPlanets from "../Stubs/PlanetsData.json";
import Helper from "../Helpers/helper.js";

describe("Planets", () => {
  // afterEach(() =>{
  //   expect(fetchMock.calls().unmatched).toEqual([])
  //   fetchMock.restore()
  // })

  it("has a class of planetCardInfo", () => {
    const mockClick = jest.fn();
    const wrapper = shallow(
      <PlanetCard data={mockPlanets} addFavorite={mockClick} favorites={[]} />
    );

    expect(wrapper.find(".planetCardInfo").length).toBe(1);
  });

  it("evaluates the number of card elements ", () => {
    const mockClick = jest.fn();
    const wrapper = shallow(
      <PlanetCard data={mockPlanets} addFavorite={mockClick} favorites={[]} />
    );

    expect(wrapper.find("p").length).toBe(4);
  });

  it("checks to see that favorites function has been called", () => {
    const mockClick = jest.fn();
    const wrapper = shallow(
      <PlanetCard data={mockPlanets} addFavorite={mockClick} favorites={[]} />
    );

    const button = wrapper.find(".planetCardInfo").children().first();

    button.simulate("click");
    expect(mockClick).toBeCalled();
  });
});
