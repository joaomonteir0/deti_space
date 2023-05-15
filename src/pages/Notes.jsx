import { PageHeader } from "../components/PageHeader"
import { SearchBar } from "../components/SearchBar"
import { Select } from "../components/Select"
import { Link } from 'react-router-dom';

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
        <>
            <PageHeader title="Apontamentos" />
            <div style={{marginLeft: "20rem", marginTop: "10rem"}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="container">
                                <div className="row g-4">
                                    {notesComponent}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-auto">
                            {props.isLoggedIn ? 
                                <Link to="/user#Apontamentos">
                                    <button className="btn btn-primary mb-3">Meus Apontamentos</button> 
                                </Link>
                                : ''}  
                            <SearchBar width={"20rem"} class={"input-group mb-3"}/>
                            <Select default={"Ano Letivo"} options={["2022-2023","2021-2022","2020-2021","2019-2020"]}/>
                            <Select default={"Disciplina"} options={["Calculo 1","MPEI","Sistemas Operativos","Alga","IHC"]}/>
                            <Select default={"Tipo"} options={["Testes e exames","Resumos","Slides Teoricos","Guioes Praticos","Praticas"]} />
                        </div>
                    </div>
                </div>
            </div>
        </>

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
        <div className="container border border-secondary rounded">
            <p><span className="fs-4 text-secondary-emphasis">{props.header}</span><span className="fs-5 text-secondary">  {props.year}</span></p>
            <p className="fs-3 text-light-emphasis">{props.title}</p>
            <p>{badges}</p>
        </div>
    )
}