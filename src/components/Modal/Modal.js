import { createPortal } from 'react-dom';
import { Component } from 'react';
import s from './Modal.module.css';

const refs = {
  modalRoot: document.querySelector('#modal-root'),
};

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    refs.modalRoot.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    refs.modalRoot.removeEventListener('click', this.handleClick);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = e => {
    if (e.target.nodeName !== 'IMG') this.props.onClose();
  };

  render() {
    return createPortal(
      <div className={s.Overlay}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      refs.modalRoot,
    );
  }
}

export default Modal;
