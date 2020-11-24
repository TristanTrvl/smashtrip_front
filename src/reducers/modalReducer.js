import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from "../actions/modal";

const initialState = {
  isShowing : false,
  content : null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isShowing: true, content : action.modalContent }
    case CLOSE_MODAL:
      return initialState
    default:
      return state;
  }
}