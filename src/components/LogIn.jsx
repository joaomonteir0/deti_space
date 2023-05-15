import './Components.css';

export const LogIn = (props) => {

    return (
        <div className="login">
            <button className="login-button" onClick={props.onClick}>
                <img src="src\assets\user.png" alt="" />
                Entrar
            </button>
        </div>
    )
}