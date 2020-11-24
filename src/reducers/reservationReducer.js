import {
  CREATE_RESERVATION_FAILURE,
  CREATE_RESERVATION_SUCCESS,
} from "../actions/reservation";

const initialState = {
  errors: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RESERVATION_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case CREATE_RESERVATION_SUCCESS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
