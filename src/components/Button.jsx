import React, { useState } from 'react';
import Modal from './Modal';

const Button = ({ closeMolda, conteudo, title, desc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    console.log('modal is open');
  };

  const closeModal = () => {
    setIsOpen(false);
    console.log('modal is closed');
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && <Modal closeModal={closeModal} conteudo={conteudo} title={title} desc={desc}/>}
    </div>
  );
};

export default Button;
