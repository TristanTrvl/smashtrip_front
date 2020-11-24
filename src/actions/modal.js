//#region TOGGLE Modal
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (content) => {
  return { 
    type: OPEN_MODAL, 
    modalContent: content, 
  };
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
}
//#endregion