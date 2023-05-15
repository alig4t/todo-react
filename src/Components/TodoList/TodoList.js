import Row from "../../HOC/Row/Row";
import Todo from "./Todo";


const TodoList = (props) => {
    
    let list = props.list.map((item,index)=>{
        return <Todo title={item} id={index} key={index} delete={()=>props.del(index)} />
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