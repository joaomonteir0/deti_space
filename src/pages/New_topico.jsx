import React from 'react';
import './Forum.css';

const New_topico = ({ closeModal , conteudo}) => {
  return (
    <div className='criar-topico'>
        <form action="">
            <input type="text" name="" id="" placeholder='Título do tópico'/>
            <select name="" id="" defaultValue={'Categoria'}>
                <option value="Categoria">Categoria2</option>
                <option value="DETI">DETI</option>
                <option value="Duvida">Dúvidas</option>
                <option value="Tech">Tech</option>
            </select>
            <textarea name="" id="" cols="30" rows="10"  className='criar-topico-text' placeholder='Conteúdo do tópico'></textarea>
            <button>Criar Tópico</button>
        </form>
    </div>
  );
};

export default New_topico;
