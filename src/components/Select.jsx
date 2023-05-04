export const Select = (props) => {
    const options = [];
    let i = 2;

    props.options.map((option) => {
        options.push(<option key={i} value={i}>{option}</option>);
        i++;
    })

    return(
        <select className="form-select mb-3" defaultValue={props.default}>
            <option value={"1"}>{props.default}</option>
            {options}
        </select>
    )
}