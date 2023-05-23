import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../pages/Notes.css';

const Apontamento = ({ apontamento, show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{apontamento.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Autor: {apontamento.author}</p>
        <p>Cadeira: {apontamento.cadeira}</p>
        <p>Tipo: {apontamento.tipo}</p>
        <p>Data: {apontamento.date}</p>
        <button className='botao-notas'><i class="fa-solid fa-file-arrow-down"></i> Transferir arquivo</button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Apontamento;
