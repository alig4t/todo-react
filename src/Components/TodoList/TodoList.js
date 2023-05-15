import Row from "../../HOC/Row/Row";
import Todo from "./Todo";


const TodoList = () => {
    return (
        <Row classList="mt-2">
            <div class="card-group">
                    <Todo />
                    <Todo />
                    <Todo />
            </div>
        
        </Row>
    );
}

export default TodoList;