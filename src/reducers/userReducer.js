import {
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  AUTHENTICATION_FAILURE,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_CHECK,
} from "../actions/user";

const initialState = {
  data: [],
  errors: null,
  token: null,
  isLoggedIn: false,
};

export default (state = initialState, action)  => {
  switch (action.type) {
    case CREATE_USER_FAILURE:
      return {
        ...state,
        errors: action.payload.errors,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        errors: null,
      };
    case AUTHENTICATION_FAILURE:
      return {
        ...state,
        errors: action.payload.errors,
      };
    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        errors: null,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case AUTHENTICATION_CHECK:
      return {
        ...state,
        errors: null,
        token: action.payload.token,
        isLoggedIn: true,
      };
    default:
      return state;
  }
}
