import React from 'react';
import styled from 'styled-components';

const ModalBody = styled.section``;

const Modal = ({ visible, onClose, onSuccess, children, ...rest }) => {
  return (
    <div class={`modal ${visible ? 'is-active' : ''}`}>
      <div class="modal-background"></div>
      <div class="modal-card" {...rest}>
        <header class="modal-card-head">
          <p class="modal-card-title"></p>
          <button onClick={onClose} class="delete" aria-label="close"></button>
        </header>
        <ModalBody className="modal-card-body">{children}</ModalBody>
        <footer class="modal-card-foot">
          <button onClick={onSuccess} class="button is-success">
            Save changes
          </button>
          <button onClick={onClose} class="button">
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
