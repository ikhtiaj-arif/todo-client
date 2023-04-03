import React, { useRef } from "react";

const Modal = ({ children, showModal, setShowModla }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (e.targer === modalRef.current) {
      setShowModla(false);
    }
  };
  return (
    showModal && (
      <div className="Modal" ref={modalRef} onClick={closeModal}>
        <div className="absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[-25%]">
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
