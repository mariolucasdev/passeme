import { connect } from 'react-redux'
import LoginList from '../../components/LoginList'

const mapStateToProps = (state) => {
  return {
    logins: state.logins,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const VisibleLoginList = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginList)

export default VisibleLoginList
