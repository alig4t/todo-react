const Todo = (props) => {
    return (
        <div className="col-12 my-2">
            <div class="card">
                <div class="card-body d-flex justify-content-between p-0">
                    <div className="p-3">
                        <h5 className="text-start">{props.title}</h5>
                        {/* <p className="text-start m-0 font11"></p> */}
                    </div>
                    <span className="h-100 align-self-center p-3 todo-del-icon" onClick={props.delete}>
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Todo;