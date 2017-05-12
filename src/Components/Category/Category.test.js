import React from "react";
import ReactDOM from "react-dom";
import Category from './Category.js';
import fetchMock from "fetch-mock";
import { shallow, mount } from "enzyme";
import mockPlanets from "../Stubs/PeopleData.json";
import Helper from "../Helpers/helper.js";


describe('Category Test', () => {


  it('renders cards in the category class screen and starts without cards', () => {

    const mockClick = jest.fn();

    const wrapper = shallow(<Category
    selection={""}
    displayData={mockPlanets}
    addFavorite={mockClick}
    favorites = {[]}/>)

    expect(wrapper.find('.category').length).toBe(0)
    

})

  });
