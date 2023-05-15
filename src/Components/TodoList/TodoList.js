import Row from "../../HOC/Row/Row";
import Todo from "./Todo";


const TodoList = (props) => {
    
    let list = props.list.map((item)=>{
        return <Todo title={item.title} id={item.id} key={item.id} />
    })

    return (
        <Row classList="mt-2">
            <div class="card-group">
                    {list}
            </div>
        </Row>
    );
}

export default TodoList;