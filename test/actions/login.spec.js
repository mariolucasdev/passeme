/* eslint no-unused-expressions: 0 */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../app/actions/login';


describe('actions', () => {
  it('addLogin should create ADD_LOGIN action', () => {
    let login = {}
    expect(actions.addLogin(login)).to.deep.equal({ type: actions.ADD_LOGIN, login: login });
  });
});
