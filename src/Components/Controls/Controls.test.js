import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls';
import fetchMock from 'fetch-mock'
import {shallow, mount} from 'enzyme'

describe('Controls Tests', () =>{
  it('should render three buttons', () =>{
    let mockFn = jest.fn()
    const wrapper = shallow(<Controls onClick = {() => mockFn}/>)

    expect(wrapper.find('button').length).toEqual(3);
  })

  it('does has button', () =>{
    const mockFn = jest.fn()
    const wrapper = shallow(<Controls buttonClick = {mockFn}/>)
    const buttonFound = wrapper.find('button').first()
    buttonFound.simulate('click')

    expect(mockFn).toBeCalled()
  })
})
