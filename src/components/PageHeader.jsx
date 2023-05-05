import './Components.css';

export const PageHeader = (props) => {
    return(
        <div className="header-pages">
            {props.title}
            <p>{props.subtitle}</p>
        </div>
    )
}