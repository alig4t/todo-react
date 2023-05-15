import React, { useState } from "react";
import AddNewTodo from "../../Components/AddNewTodo/AddNewTodo";
import TodoList from "../../Components/TodoList/TodoList";
import TodoContext from "../../Context/TodoContext";


const Main = () => {
    const [todoList, setTodoList] = useState([]);

    const addNewTodoHandler = (value) => {
        let prevTodo = [...todoList]
        // let lastId = todoList[0] ? todoList[0].id : 0
        // console.log(todoList[0]);
        // let newTodo = {
        //     id: lastId+1,
        //     title: value
        // }
        prevTodo.unshift(value);
        setTodoList(prevTodo)
    }

    
    const deleteTodoHandler = (index) => {
        console.log(index);
        let prevTodo = [...todoList]
        prevTodo.splice(index,1)
        setTodoList(prevTodo)
    }

    return (
        <>
            <AddNewTodo add={addNewTodoHandler} />
            <TodoList list={todoList} del={deleteTodoHandler} />
        </>
    );
}

export default Main;