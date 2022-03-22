import React from 'react';
import '../../styles/components/Modal.scss';
import { ReactComponent as Path } from './path.svg';

const Modal = ({
  productImg,
  productName,
  productDescription,
  modal,
  setModal,
}: {
  productImg: string;
  productName: string;
  productDescription: string;
  modal: boolean;
  setModal: any;
}) => {
  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <div className='modal__wrapper'>
      <div className='modal'>
        <button className='modal__close-button' onClick={closeModal}>
          <Path />
        </button>
        <div
          className='modal__product-image'
          style={{ backgroundImage: `url('${productImg}')` }}
        ></div>
        <h5 className='modal__product-name'>{productName}</h5>
        <p className='modal__product-description'>{productDescription}</p>
      </div>
    </div>
  );
};

export default Modal;
