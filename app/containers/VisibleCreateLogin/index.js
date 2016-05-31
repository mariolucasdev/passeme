import { connect } from 'react-redux'
import { addLogin } from '../../actions/login'
import { save } from '../../utils/File'
import CreateLogin from '../../components/CreateLogin'
import uuid from 'node-uuid';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveLogin: (login) => {
      login.id = uuid.v4();

      dispatch(addLogin(login));
      save(login, function (err) {
        if (err) {
          return console.log(err);
        }
      });
    }
  }
}

const VisibleCreateLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateLogin)

export default VisibleCreateLogin
