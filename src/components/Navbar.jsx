import { Link } from "react-router-dom";
import homeIcon from '../assets/home.png';
import newsIcon from '../assets/newspaper.png';
import notesIcon from '../assets/notes.png';
import helpIcon from '../assets/help.png';

function Navbar() {
    const btns = [
        {to: "/", imgSrc: homeIcon, title: "Início"},
        {to: "/news", imgSrc: newsIcon, title: "Notícias"},
        {to: "/notes", imgSrc: notesIcon, title: "Apontamentos"},
        {to: "/help", imgSrc: helpIcon, title: "Ajuda"}
    ]
    return (
        <div className='d-flex flex-column position-fixed top-50 start-0 translate-middle-y bg-info-subtle rounded-end p-4'>
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
            <button className="w-100 mb-3 btn btn-info">
                <img src={props.imgSrc} style={{width: "3rem"}}/><br/>
                <span>{props.title}</span>
            </button>
        </Link>
    )
}

export default Navbar;