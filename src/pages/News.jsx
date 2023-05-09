import { SearchBar } from "../components/SearchBar";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import './News.css';

export const News = () => {
    const numberOfNews = 7;
    const news = [];

    for(let i = 0; i < numberOfNews; i++) 
        news.push(<NewsInstance key={"noticia " + (i+1)} newsTitle={'Noticia ' + (i+1)} newsDescription={"Pequena descricao da noticia. neste caso da noticia "+ (i+1) + " mas podia ser de qualquer noticia"}/>)
        
    return(
        <>
        <div className="news_holder">
            <div className="news_topo">
                <PageHeader title={"- Notícias -"} subtitle={"Lorem ipsum dolor sit amet consectetur."}/>
                <SearchBar />
            </div>
            <div className="container_news">
                {news}
            </div>
        </div>
        </>
    )
}

function NewsInstance(props) {
    return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.newsTitle}</h5>
                    <p className="card-text">{props.newsDescription}</p>
                    <Link to={`/noticia_exemplo`} className="button-noticias">
                        Ler mais
                    </Link>
                </div>
            </div>
    )
}