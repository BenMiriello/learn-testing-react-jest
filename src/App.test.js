import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import Account from './Account';
import { configure, shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });


it("renders without crashing", () => {
  shallow(<App />);
});

it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Display Active Users Account Details</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

const user = {
  name: "Adeneye David",
  email: "david@gmail.com",
  username: "Dave",
};

describe("", () => {
  it("accepts user account props", () => {
    const wrapper = mount(<Account user={user} />);
    expect(wrapper.props().user).toEqual(user);
  })

  it("contains users account email", () => {
    const wrapper = mount(<Account user={user} />);
    const value = wrapper.find("p").text();
    expect(value).toEqual("david@gmail.com");
  })

  it("renders correctly with no error message", () => {
    const wrapper = mount(<App/>);
    expect(wrapper.state("error")).toEqual(null);
  })
});

