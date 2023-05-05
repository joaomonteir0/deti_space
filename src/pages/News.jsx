import { SearchBar } from "../components/SearchBar";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";

export const News = () => {
    const numberOfNews = 12;
    const news = [];

    for(let i = 0; i < numberOfNews; i++) 
        news.push(<NewsInstance key={"noticia " + (i+1)} newsTitle={'Noticia ' + (i+1)} newsDescription={"Pequena descricao da noticia. neste caso da noticia "+ (i+1) + " mas podia ser de qualquer noticia"}/>)
        
    return(
        <>
            <PageHeader title={"Notícias"}/>
            <SearchBar width={"20rem"} class={"input-group position-fixed top-0 start-50 translate-middle-x"}/>
            <div style={{marginLeft: "15rem", marginTop: "13rem"}}>
                <div className="container-fluid">
                    <div className="row g-3">
                        {news}
                    </div>
                </div>
            </div>
        </>
    )
}

function NewsInstance(props) {
    return(
        <div className="col-md-2">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.newsTitle}</h5>
                    <p className="card-text">{props.newsDescription}</p>
                    <Link to={`/noticia_exemplo`} className="btn btn-primary">
                        Ler mais
                    </Link>
                </div>
            </div>
        </div>
    )
}