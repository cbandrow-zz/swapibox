import React from "react";
import ReactDOM from "react-dom";
import VehicleCard from "./VehicleCard.js";
import fetchMock from "fetch-mock";
import { shallow, mount } from "enzyme";
import mockVehicle from "../Stubs/VehicleData.json";
import Helper from "../Helpers/helper.js";

describe("Vehicles", () => {

  it("has a class of vehicleCardInfo", () => {
    const mockClick = jest.fn();
    const wrapper = shallow(
      <VehicleCard data={mockVehicle} addFavorite={mockClick} favorites={[]} />
    );

    expect(wrapper.find(".vehicleCardInfo").length).toBe(1);
  });

  it("evaluates the number of card elements ", () => {
    const mockClick = jest.fn();
    const wrapper = shallow(
      <VehicleCard data={mockVehicle} addFavorite={mockClick} favorites={[]} />
    );

    expect(wrapper.find("p").length).toBe(3);
  });

  it("checks to see that favorites function has been called", () => {
    const mockClick = jest.fn();
    const wrapper = shallow(
      <VehicleCard data={mockVehicle} addFavorite={mockClick} favorites={[]} />
    );

    const button = wrapper.find(".vehicleCardInfo").children().first();
    button.simulate("click");
    expect(mockClick).toBeCalled();
  });
});
