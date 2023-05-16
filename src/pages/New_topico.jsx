import React, { useState } from 'react';
import './Forum.css';

const New_topico = ({ handleFormSubmit }) => {
  const [topicTitle, setTopicTitle] = useState('');
  const [topicCategory, setTopicCategory] = useState('Categoria');
  const [topicContent, setTopicContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit({ title: topicTitle, category: topicCategory, content: topicContent });
    setTopicTitle('');
    setTopicCategory('Categoria');
    setTopicContent('');
    window.location.reload(); // Reload the page
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
