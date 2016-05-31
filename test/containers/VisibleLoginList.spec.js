import { expect } from 'chai';
import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import VisibleLoginList from '../../app/containers/VisibleLoginList';
import configureStore from '../../app/store/configureStore';


function setup(initialState) {
  const store = configureStore(initialState);
  const app = renderIntoDocument(
    <Provider store={store}>
      <VisibleLoginList />
    </Provider>
  );
  return {
    app,
    link: findRenderedDOMComponentWithTag(app, 'a')
  };
}


describe('containers', () => {
  describe('App', () => {
    it('should display initial state', () => {
      const initialState = {logins: [{site: 'site name'}]};
      const { link } = setup({logins: [{site: 'site name'}]});
      expect(link.textContent).to.equal(initialState.logins[0].site);
    });
  });
});
