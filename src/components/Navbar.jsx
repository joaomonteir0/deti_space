import {Navlink} from './Navlink';
import homeIcon from '../assets/home.png';
import newsIcon from '../assets/newspaper.png';
import notesIcon from '../assets/notes.png';
import helpIcon from '../assets/help.png';

function Navbar() {
    const btns = [
        {to: "#", imgSrc: homeIcon, title: "Início"},
        {to: "#", imgSrc: newsIcon, title: "Notícias"},
        {to: "#", imgSrc: notesIcon, title: "Apontamentos"},
        {to: "#", imgSrc: helpIcon, title: "Ajuda"}
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

export default Navbar;