import searchIcon from '../assets/search.png'

export const SearchBar = (props) => {
    return(
        <div className={props.class} style={{width: props.width, marginTop: "7rem"}}>
            <input type="text" className="form-control" />
            <button type="button" className="btn btn-outline-secondary"><img src={searchIcon} style={{width: "2rem"}}/></button>
        </div>
    )
}