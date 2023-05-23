import userIcon from '../assets/Maria.png';
import pencilImg from '../assets/pencil.png';
import { useState } from 'react';
import './UserPage.css'
import linkedin from '../assets/linkedin.png';
import email from '../assets/email.png';
import github from '../assets/github.png';

export const UserPage = () => {
    const [readOnly, setReadOnly] = useState(true);
    const [description, setDescription] = useState('Descrição inicial');
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditMode = () => {
        setReadOnly(!readOnly);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleChange = (event) => {
        setDescription(event.target.value);
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
                <div className={`divBalao ${isEditing ? 'editing' : ''}`}>
                    {isEditing ? (
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <textarea
                                className="descricao"
                                value={description}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                            <button className="editing" onClick={handleSaveClick}>
                                Salvar
                            </button>
                        </div>
                    ) : (
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <textarea className="descricao" value={description} readOnly={!isEditing} />
                            <button onClick={handleEditClick} className='botaoEditar' >Editar</button>
                        </div>
                    )}
                </div>
                <div className="redesSociais">
                    <div className="divlinkedin">
                        <div class="balao1">
                            <img src={linkedin} style={{ width: "2rem" }}></img>
                            <p class="texto1">Linkedin</p>
                        </div>
                    </div>
                    <div className="divlinkedin">
                        <div class="balao1">
                            <img src={email} style={{ width: "2rem" }}></img>
                            <p class="texto1">Email</p>
                        </div>
                    </div>
                    <div className="divlinkedin">
                        <div class="balao1">
                            <img src={github} style={{ width: "2rem" }}></img>
                            <p class="texto1">Github</p>
                        </div>
                    </div>
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