import React from 'react';
import './Modal.css';

const Modal = ({ closeModal , conteudo, title, desc}) => {
  return (
    <div className='modal-bg'>
        <div className="modal-content">
            <h2>{title}</h2>
            <p>{desc}</p>
            {conteudo}
            <button onClick={closeModal}>Cancelar</button>
        </div>
    </div>
  );
};

export default Modal;
