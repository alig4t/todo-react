const Row = (props) => {
    let classList = "";
    if(props.classList){
        classList = props.classList
    }
    return (
        <div className={`row ${classList}`}>
            <div className="col-lg-8 text-center mx-auto">
                {props.children}
            </div>
        </div>
    );
}

export default Row;