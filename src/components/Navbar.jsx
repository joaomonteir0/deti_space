import { Link } from "react-router-dom";
import homeIcon from '../assets/home.png';
import newsIcon from '../assets/newspaper.png';
import notesIcon from '../assets/notes.png';
import helpIcon from '../assets/help.png';
import forumIcon from '../assets/forum.png';
import './Components.css';

function Navbar() {
    const btns = [
        {to: "/", imgSrc: homeIcon, title: "Início"},
        {to: "/news", imgSrc: newsIcon, title: "Notícias"},
        {to: "/forum", imgSrc: forumIcon, title: "Forum"},
        {to: "/notes", imgSrc: notesIcon, title: "Apontamentos"},
        {to: "/help", imgSrc: helpIcon, title: "Ajuda"}
    ]
    return (
        <div className='d-flex flex-column position-fixed top-50 start-0 translate-middle-y rounded-end p-4 alterar-menu'>
            {
                btns.map((btn) => {
                    return <Navlink key={btn.title} to={btn.to} imgSrc={btn.imgSrc} title={btn.title}/>
                })
            }    
        </div>
    )
}

function Navlink(props) {
    return (
        <Link to={props.to}>
            <button className="w-100 mb-3 btn filtro-menu" >
                <img src={props.imgSrc} style={{width: "3rem"}}/><br/>
                <span>{props.title}</span>
            </button>
        </Link>
    )
}

export default Navbar;