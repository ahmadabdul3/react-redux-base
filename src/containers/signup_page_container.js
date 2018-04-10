import { connect } from 'react-redux';
import SignupPage from 'srcRoot/pages/signup_page';
import { actions as userActions } from 'srcRoot/redux/user';

export function mapStateToProps({ }) {
  return { };
}

export function mapDispatchToProps(dispatch) {
  return {
    loginSuccess: (data) => dispatch(userActions.loginSuccess(data)),
  };
}

const SignupPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);

export default SignupPageContainer;
