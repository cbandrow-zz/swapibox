import React from 'react'
import PeopleCard from './PeopleCard.js';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import cleanedPeople from './Stubs/People1.json'


describe('Card Test', () => {

  it('1. has one class of card-container', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Card cardData={ cleanedPeople[0] }
                                  favArr={ [] }
                                  clickOnFav={ mockClick }/>)

    expect(wrapper.find('.card-container').length).toBe(1)
  });

  it('2. should assign class of favorited if the cards in in the fav arr', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Card cardData={ cleanedPeople[0] }
                                  favArr={ [cleanedPeople[0]] }
                                  clickOnFav={ mockClick }/>)

    expect(wrapper.find('.favorited').length).toBe(1)
  });
