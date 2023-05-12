import userIcon from '../assets/user.png';
import './Components.css';
import {Sair} from './Sair'; 

export const UserBox = (props) => {
    const styles = {
        width: "6em"
    }
    return (
        <div className="user-box-container">
        <div className="user-info">
          <span className="user-name">Maria Ribeiro</span>
          <div className="user-buttons">
            <button className="btn btn-primary">Opções</button>
            <button className="btn btn-danger" onClick={props.onClick}>Sair</button>
          </div>
        </div>
        <div className="user-icon">
          <img src="src/assets/Maria.png" style={styles} alt="User Icon" />
        </div>
      </div>
    )
}