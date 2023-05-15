import React from "react";
import AddNewTodo from "../../Components/AddNewTodo/AddNewTodo";
import TodoList from "../../Components/TodoList/TodoList";


const Main = () => {
    return (
        <>
           <AddNewTodo />
           <TodoList />
        </>
    );
}
 
export default Main;