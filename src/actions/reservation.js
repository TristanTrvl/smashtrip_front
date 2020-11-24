import axios from 'axios';
const reservationsCall = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/housing_reservations"
});

//#region CREATE Advert show
export const CREATE_RESERVATION_FAILURE = "CREATE_RESERVATION_FAILURE";
export const CREATE_RESERVATION_SUCCESS = "CREATE_RESERVATION_SUCCESS";

export const createReservationFailure = (error) => {
  return { type: CREATE_RESERVATION_FAILURE, payload: { error: error } };
}

export const createReservationSuccess = () => {
  return { type: CREATE_RESERVATION_SUCCESS};
}

export const createReservation = (reservation) => (dispatch) => {
  const requestOptions = {
    headers: {
      Authorization: localStorage.token,
    },
  };

  reservationsCall.post("", reservation, requestOptions)
    .then(res => {
      dispatch(createReservationSuccess(res.data));
    })
    .catch(err => {
      if (err.response) {
        dispatch(createReservationFailure(err.response.statusText));
      } else if (err.request) {
        dispatch(createReservationFailure(err.request));
      } else {
        dispatch(createReservationFailure(err.message));
      }
    });
}
//#endregion