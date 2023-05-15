import React from "react";

const TodoContext = React.createContext({
    todoList:[],
    deleteTodoHandler:()=>{}
})

export default TodoContext
