import React from 'react';
import './Modal.css';

const Modal = ({ closeModal, conteudo, title, desc, formSubmitted, handleSubmit }) => {
  
  const handleSubmitFinalSayan = () => {
    handleSubmit();
    closeModal();
  };
  return (
    <div className='modal-bg'>
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{desc}</p>
        {conteudo}
        {!formSubmitted && <button onClick={handleSubmitFinalSayan}>Cancelar</button>}
      </div>
    </div>
  );
};

export default Modal;
