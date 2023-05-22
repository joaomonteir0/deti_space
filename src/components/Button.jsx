import React, { useState } from 'react';
import Modal from './Modal';

const Button = ({ conteudo, title, desc, handleFormSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setFormSubmitted(false);
  };

  const closeModal = () => {
    setIsOpen(false);
    
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
    closeModal();
    handleFormSubmit();
  };

  return (
    <div>
      <button onClick={openModal}>Criar Tópico</button>
      {isOpen && (
        <Modal
          closeModal={closeModal}
          conteudo={conteudo}
          title={title}
          desc={desc}
          formSubmitted={formSubmitted}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Button;
