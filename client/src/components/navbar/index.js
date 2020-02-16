import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = props => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
        {!props.isAuth && (
          <li>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  isAuth: PropTypes.bool
};

export default Navbar;
