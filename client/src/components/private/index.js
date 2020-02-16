import React, {  useState, useEffect } from "react";
import PropTypes from 'prop-types';

const Private = (props) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/secret")
      .then(res => res.text())
      .then(res => setMessage(res));
  }, []);

  const logout = () => {
    props.logoutAction();
  }

  return (
    <div>
      <h1>Private</h1>
      <p>{message}</p>
      <button onClick={()=> logout()} >Logout</button>
    </div>
  );
};

Private.propTypes = {
  isAuth: PropTypes.bool,
  logoutAction: PropTypes.func.isRequired
};

export default Private;