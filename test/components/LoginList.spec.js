/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils';
import LoginList from '../../app/components/LoginList';

function setup() {
  const logins = [{site: 'site name'}];
  const actions = {};
  const component = renderIntoDocument(<LoginList logins={logins} {...actions} />);
  return {
    component,
    logins,
    link: findRenderedDOMComponentWithTag(component, 'a')
  };
}


describe('LoginList component', () => {
  it('should display login site name', () => {
    const { link, logins } = setup();
    expect(link.textContent).to.equal(logins[0].site);
  });
});
