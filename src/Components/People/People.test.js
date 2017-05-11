import React from 'react'
import PeopleCard from './PeopleCard.js';
import { shallow, mount } from 'enzyme';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock'

describe("People Card", () =>{

  it.skip('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PeopleCard />, div);
  });

})
