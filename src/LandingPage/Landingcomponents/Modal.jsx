// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <button onClick={onClose} className="absolute top-2 right-2 text-black font-bold">
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
