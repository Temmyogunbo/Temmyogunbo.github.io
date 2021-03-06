import React from 'react';
import { shallow } from 'enzyme';

import SignInForm from '../../../src/components/forms/SignInForm';

const props = {
  signin: jest.fn()
};


describe('Given a SignInForm', () => {
  const wrapper = shallow(<SignInForm {...props} />);
  describe('When I clicked on it', () => {
    it('Then it should call the onSubmit method', () => {
      const event = { ...global.event };
      const onSubmitSpy = jest.spyOn(wrapper.instance(), 'onSubmit');
      wrapper.instance().onSubmit(event);
      expect(onSubmitSpy).toHaveBeenCalledTimes(1);
    });

    it('Then it should call the handleChange method', () => {
      const event = {
        ...global.event,
        target: {
          name: 'name',
          value: 'value',
        }
      };
      const handleChangeSpy = jest.spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().handleChange(event);
      expect(handleChangeSpy).toHaveBeenCalledTimes(1);
    });

    it('Then it should call the onGoogleCallBack method', () => {
      const response = {
        profileObj: {
          givenName: "Emmanuel",
          googleId: "106447309498165670025",
        }
      };
      const onGoogleCallbackSpy = jest.spyOn(
        wrapper.instance(),
        'onGoogleCallback'
      );
      wrapper.instance().onGoogleCallback(response);
      expect(onGoogleCallbackSpy).toHaveBeenCalledTimes(1);
    });
  });
});

