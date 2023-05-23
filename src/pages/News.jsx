import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { SearchBar } from '../components/SearchBar';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import './News.css';

export const News = () => {
  const initialNews = [
    {
      "id": 1,
      "title": "New Discovery in Tech",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan tristique nisl, in sodales tellus sollicitudin id.",
      "category": "DETI",
      "author": "John Doe",
      "date": "2023-05-20"
    },
    {
      "id": 2,
      "title": "Upcoming Tech Conference",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non mi sed sem tincidunt rutrum.",
      "category": "Eventos",
      "author": "Jane Smith",
      "date": "2023-05-21"
    },
    {
      "id": 3,
      "title": "Global Environmental Crisis",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis tellus et odio aliquet tempus.",
      "category": "Mundo",
      "author": "James Johnson",
      "date": "2023-05-22"
    },
    {
      "id": 4,
      "title": "DETI Research Breakthrough",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et tortor non enim eleifend elementum.",
      "category": "DETI",
      "author": "Emily Wilson",
      "date": "2023-05-23"
    },
    {
      "id": 5,
      "title": "Tech Startup Secures Funding",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere justo et velit aliquam vulputate.",
      "category": "Eventos",
      "author": "Michael Brown",
      "date": "2023-05-24"
    },
    {
      "id": 6,
      "title": "Political Unrest in Global Affairs",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis sapien sed velit vehicula, id tristique dui condimentum.",
      "category": "Mundo",
      "author": "Olivia Davis",
      "date": "2023-05-25"
    },
    {
      "id": 7,
      "title": "New Tech Gadgets on the Horizon",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend felis eu faucibus malesuada.",
      "category": "DETI",
      "author": "William Thompson",
      "date": "2023-05-26"
    },
    {
      "id": 8,
      "title": "Tech Industry Trends for the Future",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed mauris nec lacus iaculis pharetra.",
      "category": "Eventos",
      "author": "Sophia Clark",
      "date": "2023-05-27"
    }
  ];

  const initialNewsJSON = JSON.stringify(initialNews);
  Cookies.set('news', initialNewsJSON);

  const [titleFilter, setTitleFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todas');
  const [sortOrder, setSortOrder] = useState('Recentes');
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const newsJSON = Cookies.get('news');

    if (newsJSON) {
      const loadedNews = JSON.parse(newsJSON);

      setNews(loadedNews);
    }
  }, []);

  const filteredNews = news.filter((n) => {
    if (titleFilter && !n.title.toLowerCase().includes(titleFilter.toLowerCase())) {
      return false;
    }

    if (categoryFilter !== 'Todas' && categoryFilter !== n.category) {
      return false;
    }

    return true;
  });

  if (sortOrder === 'Recentes') {
    filteredNews.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else {
    filteredNews.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  const newsPerPage = 6;
  const totalNews = filteredNews.length;
  const totalPages = Math.ceil(totalNews / newsPerPage);
  const startIndex = (currentPage - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="news_holder">
        <div className="news_topo">
          <PageHeader title={'- Notícias -'} subtitle={'Lorem ipsum dolor sit amet consectetur.'} />
          <div className="filtros-news">
            <div className="left-news"></div>
            <div className="right">
              <label htmlFor="">Pesquisa por filtros:</label>
              <input
                type="text"
                name=""
                id="title"
                placeholder="Pesquisar por título"
                onChange={(e) => setTitleFilter(e.target.value)}
              />
              <select name="" id="categoria" onChange={(e) => setCategoryFilter(e.target.value)}>
                <option value="Todas">Todas</option>
                <option value="DETI">DETI</option>
                <option value="Eventos">Eventos</option>
                <option value="Mundo">Mundo</option>
              </select>
              <select name="" id="data" onChange={(e) => setSortOrder(e.target.value)}>
                <option value="Recentes">Mais recentes primeiro</option>
                <option value="Antigas">Mais antigas primeiro</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container_news">
          {currentNews.map((n) => (
            <NewsInstance key={n.id} newsTitle={n.title} newsDescription={n.content} date={n.date} category={n.category} author={n.author}/>
          ))}
        </div>
        <div className="pagination-buttons">
          <button
            className="botao-noticias"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            className="botao-noticias"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

function NewsInstance(props) {
  return (
    <div className="card" style={{ border: '1px solid black',maxHeight:'153px' }}>
      <div className="card-body">
        <h5 className="card-title">{props.newsTitle}</h5>
        <p className="card-text">{props.newsDescription.slice(0,66)}...</p>
        <Link to={`/noticia_exemplo`} className="button-noticias">
          <i className="fa-solid fa-book-open-reader"></i> Ler mais
        </Link>
        <span style={{background:'rgb(225, 225, 225)', padding: '4px 10px', borderRadius:'8px',marginLeft:'10px'}}>{props.date}</span>
        <span style={{background:'var(--azul)', padding: '4px 10px', borderRadius:'8px',marginLeft:'10px'}}>{props.category}</span>

      </div>
    </div>
  );
}
