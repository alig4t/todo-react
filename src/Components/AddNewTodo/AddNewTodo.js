
import Row from "../../HOC/Row/Row";

const AddNewTodo = () => {
    return (
        <Row>
            <form>
                <div class="input-group mb-3">
                    <input type="text" class="form-control form-control-lg" placeholder="Your ToDo.." aria-label="Your ToDo.." aria-describedby="basic-addon2" />
                    <button type="submit" class="input-group-text todo-add-btn" id="basic-addon2">
                        <i class="fa fa-plus px-1" aria-hidden="true"></i>
                    </button>
                </div>
            </form>
        </Row>
    );
}

export default AddNewTodo;