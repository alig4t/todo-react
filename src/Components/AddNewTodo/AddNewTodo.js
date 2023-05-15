
import { useState } from "react";
import Row from "../../HOC/Row/Row";

const AddNewTodo = (props) => {
    const [todoInput, setTodoInput] = useState('');
    const submitAddHandler = (e) => {
        e.preventDefault();
        props.add(todoInput)
    }
    return (
        <Row>
            <form>
                <div class="input-group mb-3">
                    <input type="text"
                        class="form-control form-control-lg"
                        placeholder="Your ToDo.."
                        value={todoInput}
                        onChange={(e)=>(setTodoInput(e.target.value))}
                    />
                    <button type="submit" class="input-group-text todo-add-btn" id="basic-addon2" onClick={submitAddHandler}>
                        <i class="fa fa-plus px-1" aria-hidden="true"></i>
                    </button>
                </div>
            </form>
        </Row>
    );
}

export default AddNewTodo;