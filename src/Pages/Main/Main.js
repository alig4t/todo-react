import React, { useState } from "react";
import AddNewTodo from "../../Components/AddNewTodo/AddNewTodo";
import TodoList from "../../Components/TodoList/TodoList";
import TodoContext from "../../Context/TodoContext";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Main = () => {
    const [todoList, setTodoList] = useState([]);

    const addNewTodoHandler = (value) => {
        let prevTodo = [...todoList]
        prevTodo.unshift(value);
        setTodoList(prevTodo)
        toast.success(' Add New Task Successfully');

    }
    const deleteTodoHandler = (index) => {
        console.log(index);
        let prevTodo = [...todoList]
        prevTodo.splice(index, 1)
        setTodoList(prevTodo);
        toast.error('delete task successfully');
    }
    const notify = () => toast("Wow so easy !");

    return (
        <>

            <AddNewTodo add={addNewTodoHandler} />
            <TodoList list={todoList} del={deleteTodoHandler} />
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default Main;