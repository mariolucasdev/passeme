import { expect } from 'chai';
import logins from '../../app/reducers/logins';
import { ADD_LOGIN } from '../../app/actions/login';


describe('reducers', () => {
  describe('logins', () => {
    it('should handle initial state', () => {
      expect(logins(undefined, {})).to.deep.equal([]);
    });

    it('should handle ADD_LOGIN', () => {
      let login = { site: 'site' };
      expect(logins([], { type: ADD_LOGIN, login})).to.deep.equal([login]);
    });
  });
});
