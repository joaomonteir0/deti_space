import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import './News.css';
import NewTopico from './New_topico.jsx';
import Button from '../components/Button.jsx';
import { Link } from 'react-router-dom';
import './Forum.css';

export const Forum = ({ closeModal }) => {
  const [topics, setTopics] = useState([]);
  const [cookies, setCookies] = useCookies(['topics']);
  const [loading, setLoading] = useState(true);
  const navigateTo = useNavigate();

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
    // Category class logic
  }

  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const topicsPerPage = 9;

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // Calculate the index range of topics to display based on the current page
  const indexOfLastTopic = currentPage * topicsPerPage;
  const indexOfFirstTopic = indexOfLastTopic - topicsPerPage;
  const currentTopics = filteredTopics.slice(indexOfFirstTopic, indexOfLastTopic);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredTopics.length / topicsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1); // Reset the current page when search text changes
  }, [searchText]);

  // pesquisa avancada
  const [selectedCategory, setSelectedCategory] = useState('');
  const categoryOptions = [
    { label: 'DETI', value: 'DETI' },
    { label: 'Dúvidas', value: 'Dúvidas' },
    { label: 'Tech', value: 'Tech' },
    { label: 'Eventos', value: 'Eventos' },
  ];

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };
  
  return (
    <div className="content1">
      <div className="holder" style={{ marginTop: '40px', maxWidth: '1120px', marginLeft: '350px', marginRight: '80px' }}>
        <div className="topo-forum-title">
          - Forum -
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, nihil.</p>
        </div>
        <div className="topo-forum">
          <Button
            conteudo={<NewTopico handleFormSubmit={handleFormSubmit} closeModal={closeModal} />}
            title="Criar um novo tópico"
            desc="Lorem ipsum dolor sit amet."
          />
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
              <h2>{topic.title}</h2>
              <p>{topic.content.slice(0, 40)}...</p>
              <p>
                Autor: { } | Categoria: {topic.category}
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
      </div>
      <div className="category-container">
        <div className="categoryColor">

          <h3>Filtro por Categoria:</h3>
          <div className="category-buttons">
            {categoryOptions.map((category) => (
              <button
                key={category.value}
                className={`category-button ${selectedCategory === category.value ? 'active' : ''}`}
                onClick={() => handleCategorySelection(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};
