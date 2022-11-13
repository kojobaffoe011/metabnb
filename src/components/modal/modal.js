import React, { cloneElement, useEffect } from "react";
import ReactModal from "react-modal";
import { root } from "../..";
import { defaultModalStyles } from "../../utils/modal";

export const Modal = (props) => {
  const { children, isOpen, handleCancel } = props;

  useEffect(() => {
    ReactModal.setAppElement("#root");
  }, []);

  return (
    <ReactModal
      style={defaultModalStyles}
      isOpen={isOpen}
      onRequestClose={handleCancel}
    >
      {cloneElement(children)}
    </ReactModal>
  );
};
