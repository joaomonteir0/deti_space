import './Components.css';

export const LogIn = (props) => {

    return (
        <div className="login">
            <button className="login-button" onClick={() => props.onClick(true)}>
            <i className="fa-solid fa-user"></i> Entrar
            </button>

        </div>
    )
}