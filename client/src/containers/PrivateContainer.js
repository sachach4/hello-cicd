import { connect } from 'react-redux';
import Private from '../components/private';
import { logoutAction } from '../actions';

const mapStateToProps = (state, props) => {
    return state.auth;
}

const mapDispatchToProps = (dispatch) => ({
    logoutAction : () => dispatch(logoutAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Private);
