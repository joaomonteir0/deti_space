import './Home.css'

export const Home = () => {
    return (
        <div className="fundo">
            <img src="src/assets/deti.jpg" alt="" />
            <span className='title' style={{ fontSize:'135px'}}><b style={{color: 'var(--verde-escuro)'}}>DETI</b>Space<span className='makeItBlink'><i class="fa-regular fa-window-minimize"></i></span></span> 
        </div>
    )
}