import axios from 'axios';
const usersCall = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

//#region CREATE User
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";

export const createUserFailure = (errors) => {
  return { type: CREATE_USER_FAILURE, payload: { errors: errors } };
}

export const createUserSuccess = () => {
  return { type: CREATE_USER_SUCCESS };
}

export const createUser = (user) => (dispatch) => {
  usersCall.post("/users", user)
    .then(res => {
      dispatch(createUserSuccess(res.data));
    })
    .catch(err => {
      if (err.response) {
        dispatch(createUserFailure(err.response.statusText));
      } else if (err.request) {
        dispatch(createUserFailure(err.request));
      } else {
        dispatch(createUserFailure(err.message));
      }
    });
}
//#endregion

//#region AUTHENTICATE User
export const AUTHENTICATION_FAILURE = "AUTHENTICATION_FAILURE";
export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS";
export const AUTHENTICATION_CHECK = "AUTHENTICATION_CHECK";

export const authenticationChecck = () => {
  if (localStorage.token) {
    return { type: AUTHENTICATION_CHECK, payload: { token: localStorage.token } };
  } else {
    return { type: AUTHENTICATION_FAILURE, payload: { error: "No token" } };
  }
}

export const authenticationFailure = (error) => {
  return { type: AUTHENTICATION_FAILURE, payload: { error: error } };
}

export const authenticationSuccess = (token) => {
  localStorage.token = token;
  return { type: AUTHENTICATION_SUCCESS, payload: {token: token} };
}

export const authentication = (user) => (dispatch) => {
  usersCall.post("/auth/login", user)
    .then(res => {
      if (typeof res.data["token"] !== "undefined") {
        dispatch(authenticationSuccess(res.data["token"]));
      }
    })
    .catch(err => {
      if (err.response) {
        dispatch(authenticationFailure(err.response.statusText));
      } else if (err.request) {
        dispatch(authenticationFailure(err.request));
      } else {
        dispatch(authenticationFailure(err.message));
      }
    });
}
//#endregion