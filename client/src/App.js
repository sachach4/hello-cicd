import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import withAuth from "./withAuth";
import PropTypes from 'prop-types';
import NavbarContainer from "./containers/NavbarContainer";
import LoginContainer from "./containers/LoginContainer";
import Home from "./components/home";
import privateContainer from "./containers/PrivateContainer";
import SignupContainer from "./containers/SignupContainer";

const App = props => {
  console.log(props);
  useEffect(() =>{
    props.getUserAction()
  }, [])
  return (

    <div>
      <h1>{props.user && props.user.email}</h1>
      <NavbarContainer/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/secret" component={withAuth(privateContainer)} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignupContainer} />
      </Switch>
    </div>
  );
};

App.propTypes = {
  isAuth: PropTypes.bool,
  getUserAction: PropTypes.func.isRequired

};

export default App;
