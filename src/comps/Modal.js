import React from 'react';

const Modal = ({ selectedImg, setSelectedImg }) => {
  // Set state selected img only close on click on backdrop not image
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="englarged pic" />
    </div>
  );
};

export default Modal;
