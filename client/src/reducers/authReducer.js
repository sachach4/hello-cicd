import * as types from '../constants';

const initialState =  {
  isAuth: false,
  user: {},
  isLoading: false
  
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case types.GET_USER_REQUEST:
      return {
        ...state,
        isAuth: action.payload ? true : false,
        user: action.payload
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isAuth: false
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: action.payload
      };
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isAuth: false
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
      };
    case types.LOGIN_ERROR:
      return initialState;
    case types.LOGOUT:
      return initialState;
    default:
      return state
  }
}