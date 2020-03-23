import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/src/App.jsx';

describe('Tests for App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  test('App component exists', () => {
    expect(wrapper).toExist()
  })
});

it('componentDidMount function should execute', () => {
  const spy = jest.spyOn(App.prototype, 'componentDidMount');
  const wrap = shallow(<App />);
  wrap.instance().componentDidMount();
  expect(spy).toHaveBeenCalled();
});

it('should be able to set state', () => {
  const wrap = shallow(<App />);
  wrap.setState({ username: [{ username: 'Amanda' }] })
  expect(wrap.state('username')).toEqual([{ username: 'Amanda' }])
});

