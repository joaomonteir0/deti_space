import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './News.css';
import NewTopico from './New_topico.jsx';
import Button from '../components/Button.jsx';
import { Link } from 'react-router-dom';


export const Forum = (closeModal) => {
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
    navigateTo(`/forum/${topicId}`);
  };
  

  return (
    <div className="holder" style={{ marginTop: '40px' }}>
      <Button
        conteudo={<NewTopico handleFormSubmit={handleFormSubmit} closeModal={closeModal} />}
        title="Criar um novo tópico"
        desc="Lorem ipsum dolor sit amet."
      />

      <div className="topic-box">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="topic-title-box"
            onClick={() => handleTopicClick(topic.id)} // Add onClick handler
          >
            <h2>{topic.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
