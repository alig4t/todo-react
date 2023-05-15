const AddNewTodo = () => {
    return (
        <div className="row">
            <div className="col-lg-8 text-center mx-auto">
                <form>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control form-control-lg" placeholder="Your ToDo.." aria-label="Your ToDo.." aria-describedby="basic-addon2" />
                        <button type="submit" class="input-group-text" id="basic-addon2">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddNewTodo;