import userIcon from '../assets/Maria.png';
import pencilImg from '../assets/pencil.png';
import { useState } from 'react';
import './UserPage.css'

export const UserPage = () => {
    const [readOnly, setReadOnly] = useState(true);
    const [bioText, setBioText] = useState("Minha bio...");

    const toggleEditMode = () => {
        setReadOnly(!readOnly);
    };

    return (
        <div className="container w-75" style={{ marginTop: "5rem" }}>
            <div className="row">
                <div className="d-flex">
                    <div>
                        <img src={userIcon} style={{ width: "14rem" }} alt="User Icon" />
                    </div>
                    <div className="ms-3">
                        <span className="fs-3">Maria Ribeiro</span><br />
                        <span className="fs-5">LECI</span>
                        <span className="fs-5">3ª Matricula</span>
                    </div>
                </div>
            </div>
            <div className="balao">
                <p
                    className={`texto ${readOnly ? "read-only" : ""}`}
                    contentEditable={!readOnly}
                    onInput={(event) => setBioText(event.target.textContent)}
                >
                    {bioText}
                </p>
                {!readOnly && (
                    <button className="btn btn-success" onClick={toggleEditMode}>
                        Salvar
                    </button>
                )}
            </div>
            <div className="row mt-5" id="Apontamentos">
                <p className='fs-2'>Apontamentos</p>
                <div className='d-flex flex-column'>
                    <Note subject="C1" description="Como derivar" date="13-04-2022" size="13mb" />
                    <Note subject="IHC" description="Usabilidade" date="25-06-2021" size="2mb" />
                    <Note subject="P2" description="funções e recursividade" date="30-02-2021" size="5mb" />
                </div>
            </div>
        </div>
    )
}

function Note(props) {
    return (
        <div className='d-flex mb-4'>
            <div className=''>
                <span className='border border-black rounded-circle fs-3 p-2'>{props.subject}</span>
            </div>
            <div className='ms-3'>
                <span className='text-emphasis fs-4'>{props.description}</span><br />
                <span className='badge border border-primary rounded text-black'>{props.date}</span>
                <span className='badge border border-success rounded text-black ms-2'>{props.size}</span>
            </div>
        </div>
    )
}