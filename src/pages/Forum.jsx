import React, { useState } from 'react';
import './News.css';
import New_topico from './New_topico.jsx';
import Button from '../components/Button.jsx';

export const Forum = () => {
    const [topicTitle, setTopicTitle] = useState('');
    const [topicCategory, setTopicCategory] = useState('Categoria');
    const [topicContent, setTopicContent] = useState('');
    const [topics, setTopics] = useState([]);
    const [topicId, setTopicId] = useState(0);

    const generateUniqueId = () => {
        const newId = topicId + 1;
        setTopicId(newId);
        return newId;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Check if all fields are filled
        if (topicTitle && topicCategory !== 'Categoria' && topicContent) {
          // Create a new topic object
          const newTopic = {
            id: generateUniqueId(),
            title: topicTitle,
            category: topicCategory,
            content: topicContent,
          };
    
          // Add the new topic to the list
          setTopics((prevTopics) => [...prevTopics, newTopic]);
    
          // Redirect to the page with the topic ID
          // You can use a router library like React Router for navigation
          // Replace `/topics/:id` with the actual route to the topic page
          history.push(`/topics/${newTopic.id}`);
        }
      };

    return (
        <div className="holder" style={{marginTop: '40px'}}>
            <Button conteudo={<New_topico handleFormSubmit={handleFormSubmit} />} title="Criar um novo tópico" desc="Lorem ipsum dolor sit amet." />

            <div className="topic-box">
                {/* Map through the list of topics and render each title in a box */}
                {topics.map((topic) => (
                    <div key={topic.id} className="topic-title-box">
                        <h2>{topic.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
