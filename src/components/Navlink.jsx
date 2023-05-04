import { Link } from "react-router-dom";

export const Navlink = (props) => {
    const styles = {
        width: "3rem"
    }
    //props used for:
    //to
    //img src
    //btn title
    return (
        <Link to={props.to}>
            <button className="w-100 mb-3 btn btn-info">
                <img src={props.imgSrc} style={styles}/><br/>
                <span>{props.title}</span>
            </button>
        </Link>
    )
}