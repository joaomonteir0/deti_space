import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './News.css';
import NewTopico from './New_topico.jsx';
import Button from '../components/Button.jsx';
import { Link } from 'react-router-dom';
import './Forum.css';


export const Forum = ({closeModal,}) => {
  const [topics, setTopics] = useState([]);
  const [cookies, setCookies] = useCookies(['topics']);
  const [loading, setLoading] = useState(true);
  const navigateTo = useNavigate(); // Create a navigateTo function

  const generateUniqueId = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return timestamp + random;
  };

  useEffect(() => {
    if (loading) {
      const storedTopics = cookies.topics;
      if (storedTopics) {
        setTopics(storedTopics);
      }
      setLoading(false);
    }
  }, [cookies, loading]);

  const handleFormSubmit = (topic) => {
    const newTopic = {
      id: generateUniqueId(),
      ...topic,
    };
    setTopics((prevTopics) => [...prevTopics, newTopic]);
  };    

  useEffect(() => {
    setCookies('topics', topics, { path: '/' });
  }, [topics, setCookies]);

  const handleTopicClick = (topicId) => {
    navigateTo(`/forum/${topicId}`, { state: { topics } });
  };
  
    function getCategoryClass(category) {
      switch (category) {
        case 'DETI':
          return 'category1';
        case 'Duvida':
          return 'category2';
        case 'Tech':
          return 'category3';
        case 'Eventos':
            return 'category4';
        // Add more cases for other categories if needed
        default:
          return '';
      }
    }
  
  

  return (
    <div className="holder" style={{ marginTop: '40px' }}>
      <Button
        conteudo={<NewTopico handleFormSubmit={handleFormSubmit} closeModal={closeModal} />}
        title="Criar um novo tópico"
        desc="Lorem ipsum dolor sit amet."
      />

      <div className="topic-box">
      {topics.reverse().map((topic) => (
        <div
            key={topic.id}
            className={`topic-title-box ${getCategoryClass(topic.category)}`}
            onClick={() => handleTopicClick(topic.id)} // Add onClick handler
        >
            <h2>{topic.title}</h2>
            <p>{topic.content.slice(0, 40)}...</p>
            <p>Autor:{} | Categoria: {topic.category}</p>
        </div>
        ))}

      </div>
    </div>

  );
};
