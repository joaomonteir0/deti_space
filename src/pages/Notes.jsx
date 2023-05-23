import { PageHeader } from "../components/PageHeader"
import { SearchBar } from "../components/SearchBar"
import { Select } from "../components/Select"
import { Link } from 'react-router-dom';
import './Notes.css';

export const Notes = (props) => {
    const badges = {
        TestesExames: {color: "success",name: "Teste e exames"},
        Resumos: {color: "secondary", name: "Resumos"},
        Slides: {color: "info", name: "Slides teoricos"},
        Praticas: {color: "primary", name: "Praticas"},
        GuioesPraticos: {color: "warning", name: "Guioes praticos"}
    }
    const notes = [
        {header: "C1",year: "2022-2023",title: "Testes Calculo 1",badges: [badges.TestesExames]},
        {header: "MPEI",year: "2019-2020",title: "Resumos MPEI",badges: [badges.Resumos,badges.Slides]},
        {header: "IHC",year: "2021-2022",title: "Projeto Ze e Manel",badges: [badges.Praticas,badges.GuioesPraticos]},
        {header: "Alga",year: "2022-2023",title: "Testes alga",badges: [badges.TestesExames]},
        {header: "SO",year: "2020-2021",title: "Testes Sistemas Operativos",badges: [badges.TestesExames]},
        {header: "IHC",year: "2021-2022",title: "Testes IHC",badges: [badges.TestesExames]}
    ]

    const notesComponent = []
    let i = 0;
    notes.map((note) => {
        notesComponent.push(<div key={i} className="col-md-auto"><NotesCard {...note}/></div>);
        i++;
    })

    return(
        <div className="holder-notes">
            <div className="topo-forum-title">
                - Apontamentos -
                <p>Partilhar e aprender</p>
            </div>
            <div className="notes-grid">
                <div className="left">
                    <div className="apontamento">
                        <div className="dados">
                            <span className="title">apontamento.title</span><br />
                            <span className="title">apontamento.author - apontamento.date</span>
                        </div>
                        <div className="lerApontamento">
                            <button>Ver Apontamento</button>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <span>Pesquisar</span>
                    <div className="select-notes">
                        <select name="" id="">
                            <option value="">Cadeira</option>
                            <option value="Cálculo">Cálculo</option>
                            <option value="POO">POO</option>
                            <option value="IHC">IHC</option>
                            <option value="Algebra">Algebra</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

function NotesCard(props) {
    const badges = []
    let i = 0;

    if(props.badges)
        props.badges.map((badge) => {
            badges.push(<span key={i} className={"badge text-bg-" + badge.color}>{badge.name}</span>)
            i++;
        })

    return(
        <div>a</div>


    )
}