import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import crossImg from "../../images/cross.svg";

export default ({ isShowing, modalContent, closeModal }) => {
  return isShowing ? createPortal(
    <>
      <Overlay />
      <ModalContainer>
        <CloseButton onClick={() => closeModal()}>
          <Cross src={crossImg} alt="" />
        </CloseButton>
        {modalContent}
      </ModalContainer>
    </>,
    document.querySelector("#modal-root")
  ) : null;
};

const Overlay = styled.div`
  position: fixed;
  bottom:0;
  left:0;
  right:0;
  top:0;
  background-color: rgba(28,28,28,0.2);
`;
const ModalContainer = styled.div`
  align-items: center;
  background-color: #ea5818;
  border-radius: 0.5rem;
  left: 50%;
  padding: 2rem 3rem;
  position: fixed;
  margin: 0 auto;
  top: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
`;
const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
const Cross = styled.img`
  width: 1.5rem;
`;