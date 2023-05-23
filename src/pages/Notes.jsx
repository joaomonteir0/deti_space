import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './Notes.css';

export const Notes = () => {
  const initialApontamentos = [
    { id: 1, title: 'Apontamento 1', author: 'Author 1', date: '2023-05-20', cadeira: 'Cálculo', tipo: 'Resumo Teórico' },
    { id: 2, title: 'Apontamento 2', author: 'Author 2', date: '2023-05-21', cadeira: 'POO', tipo: 'Guião Prático' },
  ];

  const initialApontamentosJSON = JSON.stringify(initialApontamentos);

  Cookies.set('apontamentos', initialApontamentosJSON);

  const [cadeiraFilter, setCadeiraFilter] = useState('');
  const [tipoFilter, setTipoFilter] = useState('');
  const [apontamentos, setApontamentos] = useState([]);

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
                <button>Ver Apontamento</button>
              </div>
            </div>
          ))}
        </div>
        <div className="right">
          <span>Pesquisar</span>
          <div className="select-notes">
              <input type="text" name="" id="title" className='input-filter-notes'/>
            <select name="" id="cadeira" onChange={(e) => setCadeiraFilter(e.target.value)}>
              <option value="">Todas as cadeira</option>
              <option value="Cálculo">Cálculo</option>
              <option value="POO">POO</option>
              <option value="IHC">IHC</option>
              <option value="Algebra">Algebra</option>
            </select>
            <select name="" id="tipo" onChange={(e) => setTipoFilter(e.target.value)}>
              <option value="">Todos os tipos</option>
              <option value="Resumo Teórico">Resumo Teórico</option>
              <option value="Guião Prático">Guião Prático</option>
              <option value="Trabalho">Trabalho</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
