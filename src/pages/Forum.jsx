import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import './News.css';
import NewTopico from './New_topico.jsx';
import Button from '../components/Button.jsx';
import { Link } from 'react-router-dom';
import './Forum.css';

export const Forum = ({ loginToken }) => {
  const [topics, setTopics] = useState([]);
  const [cookies, setCookies] = useCookies(['topics']);
  const [loading, setLoading] = useState(true);
  const navigateTo = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [tempTopic, setTempTopic] = useState({});

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (topic) => {
    setTempTopic(topic);
    setShowConfirmation(true);
    setTimeout(() => {
      handleTopicClick(newTopic.id);
    }, 2000);
  };

  const gotoForum = (id) => {
    navigateTo(`/forum/${id}`, { state: { topics } });
  };

  const handleConfirmation = () => {
    const newTopic = { ...tempTopic, id: generateId() }; // Generate a unique ID for the new topic
    setTopics((prevTopics) => [...prevTopics, newTopic]);
    closeModal();
    setShowConfirmation(false);
  };

  const generateId = () => {
    // Generate a unique ID for the topic
    // You can use a library like uuid to generate a unique ID or implement your own logic
    // For simplicity, let's assume we're using a simple incrementing ID
    return String(topics.length + 1);
  };

  useEffect(() => {
    if (loading) {
      const storedTopics = cookies.topics;
      if (storedTopics) {
        setTopics(storedTopics);
      } else {
        const initialTopics = [
          { id: '1', title: 'Tips for Effective Studying', category: 'DETI', content: 'Lorem ipsum dolor sit amet.', author: 'John Doe' },
          { id: '2', title: 'The Impact of Technology', category: 'Tech', content: 'Lorem ipsum dolor sit amet consectetur.', author: 'Jane Smith' },
          { id: '3', title: 'Strategies for Time Management', category: 'DETI', content: 'Lorem ipsum dolor sit amet.', author: 'Alice Johnson' },
          { id: '4', title: 'The Benefits of Extracurricular', category: 'Tech', content: 'Lorem ipsum dolor sit amet consectetur.', author: 'Bob Anderson' },
          { id: '5', title: 'Overcoming Math Anxiety', category: 'Duvida', content: 'Lorem ipsum dolor sit amet.', author: 'Eve Wilson' },
          { id: '6', title: 'Preparing for College Admissions', category: 'Eventos', content: 'Lorem ipsum dolor sit amet consectetur.', author: 'Michael Davis' },
          { id: '7', title: 'The Importance of Communication', category: 'Tech', content: 'Lorem ipsum dolor sit amet.', author: 'Sophia Clark' },
          { id: '8', title: 'Effective Note-Taking Techniques', category: 'DETI', content: 'Lorem ipsum dolor sit amet consectetur.', author: 'Oliver Taylor' },
          { id: '9', title: 'The Role of Arts in Education', category: 'Tech', content: 'Lorem ipsum dolor sit amet.', author: 'Emily Walker' },
          { id: '10', title: 'Developing Critical Thinking', category: 'DETI', content: 'Lorem ipsum dolor sit amet consectetur.', author: 'Daniel Wilson' },
          { id: '11', title: 'The Importance of Physical Education', category: 'Tech', content: 'Lorem ipsum dolor sit amet.', author: 'Ava Martin' },          // ...other initial topics
        ];
        setTopics(initialTopics);
        setCookies('topics', initialTopics, { path: '/' });
      }
      setLoading(false);
    }
  }, [cookies, loading, setCookies]);

  useEffect(() => {
    setCookies('topics', topics, { path: '/' });
  }, [topics, setCookies]);

  const handleTopicClick = (topicId) => {
    navigateTo(`/forum/${topicId}`, { state: { topics } });
  };

  function getCategoryClass(category) {
    // Category class logic
  }

  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const topicsPerPage = 9;

  const filteredTopics = topics
    .filter((topic) => topic.title.toLowerCase().includes(searchText.toLowerCase()))
    .reverse();

  const indexOfLastTopic = currentPage * topicsPerPage;
  const indexOfFirstTopic = indexOfLastTopic - topicsPerPage;
  const currentTopics = filteredTopics.slice(indexOfFirstTopic, indexOfLastTopic);

  const totalPages = Math.ceil(filteredTopics.length / topicsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  return (
    <div className="holder" style={{ marginTop: '40px', maxWidth: '1120px' }}>
      <div className="topo-forum-title">
        - Forum -
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, nihil.</p>
      </div>
      <div className="topo-forum">
        {loginToken ? (
          <Button
            conteudo={<NewTopico handleFormSubmit={handleFormSubmit} closeModal={closeModal} />}
            title="Criar um novo tópico"
            desc="Lorem ipsum dolor sit amet."
            onClick={openModal}
          />
        ) : <div />}
        <input
          type="search"
          name=""
          id=""
          placeholder="Pesquisar por um tópico"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="topic-box">
        {currentTopics.map((topic) => (
          <div
            key={topic.id}
            className={`topic-title-box ${getCategoryClass(topic.category)}`}
            onClick={() => handleTopicClick(topic.id)}
          >
            <h2 style={{ fontSize: '20px' }}>{topic.title}</h2>
            <p style={{ fontSize: '15px' }}>{topic.content.slice(0, 40)}...</p>
            <p style={{ fontSize: '13px' }}>
              Autor: {topic.author} | <span>Categoria: {topic.category}</span>
            </p>
          </div>
        ))}
      </div>

      {filteredTopics.length > topicsPerPage && (
        <div className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

      {showConfirmation && (
        <div className="confirmation-modal">
          <div className="confirmation-box">
            <h3>Confirmar</h3>
            <p>Quer mesmo publicar este tópico?</p>
            <div className="buttons">
              <button onClick={handleConfirmation}>Yes</button>
              <button onClick={closeModal}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
