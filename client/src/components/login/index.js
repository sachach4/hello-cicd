import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Login = props => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleInputChange = event => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = event => {
    event.preventDefault();
    props.logginAction(values);
  };

  return (
    <>
      {props.user && props.isAuth && <Redirect to="/" />}
      <form onSubmit={onSubmit}>
        <h1>Login Below!</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={values.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleInputChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Login;
