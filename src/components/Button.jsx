import React, { useState } from 'react';
import Modal from './Modal';
import '../pages/Forum.css';

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
      <button onClick={openModal} className={'botao-criar-estilinho'}><i class="fa-solid fa-pen-to-square"></i> Criar Tópico</button>
      {isOpen && <Modal closeModal={closeModal} conteudo={conteudo} title={title} desc={desc}/>}
    </div>
  );
};

export default Button;
