import React from "react";
import TodoItem from "./TodoItem"; 
import { Todo } from "./App";

type TodoListProps = {
    todos: Todo[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
   return (
     <ul style={{backgroundColor:'burlywood', width:100, padding: 350, margin:10,fontSize:20, fontWeight:14}}>
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo}/>
        ))}
     </ul>
   );
};

export default TodoList;