import React from 'react';
import '../../styles/components/Modal.scss';

const Modal = (props: any) => {
  console.log(props);

  return (
    <div className='modal'>
      <h2>TEST</h2>
      <p>Test!!!!</p>
      <div>{props.productImg}</div>
      <div>{props.productName}</div>
      <div>{props.productDescription}</div>
    </div>
  );
};

export default Modal;
