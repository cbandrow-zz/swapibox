import React from 'react';
import ReactDOM from 'react-dom';
import Favorites from './Favorites';
import fetchMock from 'fetch-mock'
import {shallow, mount} from 'enzyme'

describe('Favorites Button Test', () =>{
  it('does has button', () =>{
    let favorite = ["item1", "item2"]
    const mockFn = jest.fn()
    const wrapper = shallow(<Favorites favorite ={favorite}
                                       buttonClick = {mockFn}/>)

    expect(wrapper.find("button").length).toEqual(1)
    expect(wrapper.find("h1").length).toEqual(1)
  })

  it('does has button', () =>{
    const mockFn = jest.fn()
    let favorite = ["item1", "item2"]
    const wrapper = shallow(<Favorites favorite ={favorite}
                                       buttonClick = {mockFn}/>)
    const buttonFound = wrapper.find('button')
    buttonFound.simulate('click')

    expect(mockFn).toBeCalled()
  })
})
