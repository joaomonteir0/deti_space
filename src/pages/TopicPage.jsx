import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './Forum.css';

const TopicPage = () => {
  const location = useLocation();
  const { topicId } = useParams();
  const topics = location.state?.topics || [];

  // Find the topic with the matching topicId
  const topicData = topics.find((topic) => topic.id === topicId);

  if (!topicData) {
    // Handle the case when the topic data is not found
    return <div>Topic not found</div>;
  }

  return (
    <div className='topico'>
      <a className="voltar alinhar" href="/forum"><i class="fa-solid fa-backward"></i>  Voltar para o fórum</a>
      <h2 className='titulo'>{topicData.title}</h2>
      <p className='categoria'>{topicData.category}</p>
      <p className='conteudo'>{topicData.content}</p>
    </div>
  );
};

export default TopicPage;
