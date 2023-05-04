import userIcon from '../assets/user.png';

export const UserBox = (props) => {
    const styles = {
        width: "4em"
    }
    return (
        <div className="d-flex position-fixed top-0 end-0 mt-3 me-4">
            <div>
                <span>Utilizador Test</span><br/>
                <span><button className="btn btn-primary">Opcoes</button></span>
                <span><button className="btn btn-danger" onClick={props.onClick}>Sair</button></span>
            </div>
            <div className="ms-3">
                <img src={userIcon} style={styles}/>
            </div>
        </div>
    )
}