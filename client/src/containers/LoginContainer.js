import { connect } from "react-redux";
import Login from "./../components/login";
import { logginAction } from "../actions";

const mapStateToProps = (state, props) => {
  return state.auth;
};

const mapDispatchToProps = dispatch => ({
  logginAction: (values) => dispatch(logginAction(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
