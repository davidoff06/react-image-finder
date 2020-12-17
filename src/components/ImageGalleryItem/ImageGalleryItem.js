import s from './ImageGalleryItem.module.css';
import Modal from '../Modal';
// import * as basicLightbox from 'basiclightbox';
import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  state = { showModal: false };

  toggleModal = () =>
    this.setState(({ showModal }) => ({ showModal: !showModal }));

  render() {
    const { src, alt } = this.props;
    const { showModal } = this.state;

    return (
      <li className={s.ImageGalleryItem}>
        <img
          src={src}
          alt={alt}
          className={s.ImageGalleryItemImage}
          onClick={() => this.toggleModal(src)}
        />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={src} width="800" height="600" alt={alt} />
          </Modal>
        )}
      </li>
    );
  }
}
