import { connect } from "react-redux";
import App from "../App";
import { getUserAction } from "../actions";

const mapStateToProps = (state, props) => {
  return state.auth;
};

const mapDispatchToProps = dispatch => ({
  getUserAction: () => dispatch(getUserAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
