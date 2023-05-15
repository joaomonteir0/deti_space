import userIcon from '../assets/Maria.png';
import { Link } from 'react-router-dom';
import './Components.css';

export const UserBox = (props) => {
    return (
        <div className="user-box-container">
        <div className="user-info">
          <span className="user-name">Maria Ribeiro</span>
          <div className="user-buttons">
            <span>
              <Link to="/user">
                <button className="btn btn-primary me-2">Opcoes</button>
              </Link>
            </span>
            <button className="btn btn-danger" onClick={props.onClick}>Sair</button>
          </div>
        </div>
        <div className="user-icon">
          <img src={userIcon} style={{width: "6em"}} alt="User Icon" />
        </div>
      </div>
    )
}