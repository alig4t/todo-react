const Todo = ({title,id}) => {
    return (
        <div className="col-12 my-2">
            <div class="card">
                <div class="card-body d-flex justify-content-between p-0">
                    <div className="p-3">
                        <h5 className="text-start">{title}</h5>
                        <h6 className="text-start">{id}</h6>
                        <p className="text-start m-0 text-justify">This is some text withiis is some text within is is some text within is is some text within is is some text within n a card body.</p>

                    </div>
                    <span className="h-100 align-self-center p-3 todo-del-icon">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Todo;