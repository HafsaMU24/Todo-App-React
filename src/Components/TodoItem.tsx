import React from "react";
import { Todo } from "./App";

type TodoItemProps = {
    todo: Todo; 
    
};
const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
 return ( 
    <li>
        <input type= "checkbox" style={{listStyle: "none", padding: '10px', fontSize: '20px'}}/>
        {todo.text}
    </li>
  
 );
};

export default TodoItem;