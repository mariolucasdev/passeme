import { connect } from 'react-redux'
import ViewLogin from '../../components/ViewLogin'

const mapStateToProps = (state, owmProps) => {
  let id = owmProps.params.userId;
  let login = state.logins.find( l => l.id === id);
  return {
    login: login || {}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const VisibleViewLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewLogin)

export default VisibleViewLogin
