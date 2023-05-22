import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forum.css';

const New_topico = ({ closeModal, handleFormSubmit }) => {
  const [topicTitle, setTopicTitle] = useState('');
  const [topicCategory, setTopicCategory] = useState('Categoria');
  const [topicContent, setTopicContent] = useState('');
  const [topicAuthor, setTopicAuthor] = useState('Maria Ribeiro'); // Set the initial author to "Maria Ribeiro"

  const handleSubmit = (e) => {
    e.preventDefault();

    handleFormSubmit({
      title: topicTitle,
      category: topicCategory,
      content: topicContent,
      author: topicAuthor,
    });

    setTopicTitle('');
    setTopicCategory('Categoria');
    setTopicContent('');
    setTopicAuthor('Maria Ribeiro');

    closeModal(); // Call the closeModal function passed as a prop to close the modal
  };

  return (
    <div className="criar-topico">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="topicTitle"
          value={topicTitle}
          onChange={(e) => setTopicTitle(e.target.value)}
          placeholder="Título do tópico"
        />
        <select
          name="topicCategory"
          value={topicCategory}
          onChange={(e) => setTopicCategory(e.target.value)}
        >
          <option value="Categoria">Categoria</option>
          <option value="DETI">DETI</option>
          <option value="Duvida">Dúvidas</option>
          <option value="Tech">Tech</option>
          <option value="Eventos">Eventos</option>
        </select>
        <textarea
          name="topicContent"
          value={topicContent}
          onChange={(e) => setTopicContent(e.target.value)}
          cols="30"
          rows="10"
          className="criar-topico-text"
          placeholder="Conteúdo do tópico"
        ></textarea>
        <button type="submit">Criar Tópico</button>
      </form>
    </div>
  );
};

export default New_topico;
