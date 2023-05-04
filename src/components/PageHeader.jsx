export const PageHeader = (props) => {
    return(
        <div className="position-absolute top-0 start-50 translate-middle-x mt-3">
            <p className="fs-1 text-primary">{props.title}</p>
        </div>
    )
}