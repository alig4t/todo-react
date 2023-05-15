import React, { useState } from "react";
import AddNewTodo from "../../Components/AddNewTodo/AddNewTodo";
import TodoList from "../../Components/TodoList/TodoList";


const Main = () => {
    const [todoList, setTodoList] = useState([]);

    const addNewTodoHandler = (value) => {
        let prevTodo = [...todoList]
        let lastId = todoList[0] ? todoList[0].id : 0
        console.log(todoList[0]);
        let newTodo = {
            id: lastId+1,
            title: value
        }
        prevTodo.unshift(newTodo);
        setTodoList(prevTodo)
    }


    return (
        <>
            <AddNewTodo add={addNewTodoHandler} />
            <TodoList list={todoList} />
        </>
    );
}

export default Main;