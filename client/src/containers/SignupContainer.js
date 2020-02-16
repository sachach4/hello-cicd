import { connect } from "react-redux";
import Signup from "../components/signup";
import { signupAction } from "../actions";

const mapStateToProps = (state, props) => {
  return state.auth;
};

const mapDispatchToProps = dispatch => ({
  signupAction: (values) => dispatch(signupAction(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
