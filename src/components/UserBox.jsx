import userIcon from '../assets/Maria.png';
import { Link } from 'react-router-dom';
import './Components.css';

export const UserBox = (props) => {
    return (
      <>
        <div className="user-box-container">
          <div className="user-info">
            <span className="user-name">Maria Ribeiro</span>
            <div className="user-buttons">
              <span>
                <Link to="/user">
                  <button className="btn btn-primary me-2">Perfil</button>
                </Link>
              </span>
              <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalSair">Sair</button>
            </div>
          </div>
          <div className="user-icon">
            <img src={userIcon} style={{width: "6em"}} alt="User Icon" />
          </div>
        </div>
        <div className="modal" id="modalSair">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">Sair</h3>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <p className="fs-5">Tem a certeza que deseja sair?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Não</button>
                <button className="user-box-button" onClick={() => props.onClick(false)}>
                  <i class="fa-solid fa-right-from-bracket"></i> Sair
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}