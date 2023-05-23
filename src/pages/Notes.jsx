import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './Notes.css';
import Apontamento from '../components/Apontamento';

export const Notes = () => {
    const initialApontamentos = [
        {
        id: 1,
        title: 'Descobrindo Derivadas',
        author: 'Sofia Silva',
        date: '2023-05-20',
        cadeira: 'Cálculo',
        tipo: 'Resumo Teórico',
        },
        {
        id: 2,
        title: 'Programando em Java',
        author: 'Miguel Santos',
        date: '2023-05-21',
        cadeira: 'POO',
        tipo: 'Guião Prático',
        },
        {
        id: 3,
        title: 'Explorando a Interação Humano-Computador',
        author: 'Ana Costa',
        date: '2023-05-22',
        cadeira: 'IHC',
        tipo: 'Trabalho',
        },
        {
        id: 4,
        title: 'Resolvendo Equações Quadráticas',
        author: 'Rui Fernandes',
        date: '2023-05-23',
        cadeira: 'Álgebra',
        tipo: 'Resumo Teórico',
        },
        {
        id: 5,
        title: 'Aprenda a Programar em Python',
        author: 'Carolina Rodrigues',
        date: '2023-05-24',
        cadeira: 'FP',
        tipo: 'Resumo Teórico',
        },
        {
        id: 6,
        title: 'Princípios de Arquitetura de Software',
        author: 'Gonçalo Pereira',
        date: '2023-05-25',
        cadeira: 'IES',
        tipo: 'Resumo Teórico',
        },
        {
        id: 7,
        title: 'Acessibilidade Digital',
        author: 'Mariana Oliveira',
        date: '2023-05-26',
        cadeira: 'IHC',
        tipo: 'Trabalho',
        },
        {
        id: 8,
        title: 'Design Centrado no Usuário',
        author: 'Pedro Santos',
        date: '2023-05-27',
        cadeira: 'IHC',
        tipo: 'Resumo Teórico',
        },
        {
        id: 9,
        title: 'Usabilidade em Interfaces Web',
        author: 'Inês Pereira',
        date: '2023-05-28',
        cadeira: 'IHC',
        tipo: 'Guião Prático',
        },
        {
        id: 10,
        title: 'Empirical methods',
        author: 'Sofia Rocha',
        date: '2023-05-30',
        cadeira: 'IHC',
        tipo: 'Guião Prático',
        },
    ];

    initialApontamentos.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();

    const initialApontamentosJSON = JSON.stringify(initialApontamentos);

    Cookies.set('apontamentos', initialApontamentosJSON);

    const [cadeiraFilter, setCadeiraFilter] = useState('');
    const [tipoFilter, setTipoFilter] = useState('');
    const [apontamentos, setApontamentos] = useState([]);
    const [titleFilter, setTitleFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedApontamento, setSelectedApontamento] = useState('');

    useEffect(() => {
        const apontamentosJSON = Cookies.get('apontamentos');

        if (apontamentosJSON) {
        const loadedApontamentos = JSON.parse(apontamentosJSON);

        setApontamentos(loadedApontamentos);
        }
    }, []);

    const filteredApontamentos = apontamentos.filter((apontamento) => {
        if (cadeiraFilter && apontamento.cadeira !== cadeiraFilter) {
          return false;
        }
        if (tipoFilter && apontamento.tipo !== tipoFilter) {
          return false;
        }
        if (titleFilter && !apontamento.title.toLowerCase().includes(titleFilter.toLowerCase())) {
          return false;
        }
        if (dateFilter && new Date(apontamento.date) < new Date(dateFilter)) {
          return false;
        }
        return true;
      });

    return (
    <div className="holder-notes">
      <div className="topo-forum-title">
        - Apontamentos -
        <p>Partilhar e aprender</p>
      </div>
      <div className="notes-grid">
        <div className="left">
          {filteredApontamentos.map((apontamento) => (
            <div key={apontamento.id} className="apontamento">
              <div className="dados">
                <span className="title">{apontamento.title}</span>
                <br />
                <span className="title">
                  {apontamento.author} - {apontamento.date} - {apontamento.cadeira} - {apontamento.tipo}
                </span>
              </div>
              <div className="lerApontamento">
                <button className='botao-notas' onClick={() => {
                    setSelectedApontamento(apontamento);
                    setShowModal(true);
                }}>Ver Apontamento <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
          ))}
        </div>
        <div className="right">
        <span>Pesquisar</span>
        <div className="select-notes">
        <input
            type="text"
            placeholder="Pesquisar por título"
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
            className="input-filter-notes"
        />
        <label htmlFor="">A partir de:</label>
        <input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="input-filter-notes"
        />
        <label htmlFor="">Filtrar por:</label>
        <select name="" id="cadeira" onChange={(e) => setCadeiraFilter(e.target.value)}>
            <option value="">Todas as cadeiras</option>
              <option value="Cálculo">Cálculo</option>
              <option value="POO">POO</option>
              <option value="IHC">IHC</option>
              <option value="Algebra">Álgebra</option>
              <option value="IES">IES</option>
              <option value="FP">FP</option>
        </select>
        <select name="" id="tipo" onChange={(e) => setTipoFilter(e.target.value)}>
            <option value="">Todos os tipos</option>
              <option value="Resumo Teórico">Resumo Teórico</option>
              <option value="Guião Prático">Guião Prático</option>
              <option value="Trabalho">Trabalho</option>
        </select>
        </div>

        </div>
        <Apontamento
        apontamento={selectedApontamento}
        show={showModal}
        handleClose={() => setShowModal(false)}
        />
      </div>
    </div>
  );
};
