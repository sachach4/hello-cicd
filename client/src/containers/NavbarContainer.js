import { connect } from 'react-redux';
import Navbar from '../components/navbar';

const mapStateToProps = (state, props) => {
    return state.auth;
}


export default connect(mapStateToProps)(Navbar);
