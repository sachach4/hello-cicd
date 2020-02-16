import * as types from "./../constants";

export const getUserAction = () => {
  return dispatch => {
    return fetch("/api/check/token")
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch({ type: types.GET_USER_REQUEST, payload: json });
      });
  };
};

export const logginAction = values => {
  return dispatch => {
    dispatch({ type: types.LOGIN_REQUEST });
    return fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(json => {
        console.log(json.json())
        dispatch({ type: types.LOGIN_SUCCESS });
        dispatch(getUserAction());
      })
      .catch(err => {
        console.error(err);
        alert("Error logging in please try again");
      });
  };
};

export const signupAction = values => {
  return dispatch => {
    dispatch({ type: types.SIGNUP_REQUEST });
    return fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(json => {
        dispatch({ type: types.SIGNUP_SUCCESS });
        dispatch(getUserAction());
      })
      .catch(err => {
        console.error(err);
      });
  };
};

export const logoutAction = () => {
  return dispatch => {
    return fetch("/api/auth/logout").then(response => {
      dispatch({ type: types.LOGOUT });
    });
  };
};
