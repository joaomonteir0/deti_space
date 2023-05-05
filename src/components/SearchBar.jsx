import searchIcon from '../assets/search.png'

export const SearchBar = (props) => {
    return(
        <div class="teste" style={{width: props.width, marginTop: "20px", display: "flex", justifyContent: "flex-end"}}>
            <input type="text" placeholder='Pesquisa uma notícia!' style={{alignSelf: 'flex-end', height: '2.5rem'}} />
            <button type="button" style={{alignSelf: 'flex-end', height: '2.5rem'}}><img src={searchIcon} width="30px"/></button>
        </div>
    )
}