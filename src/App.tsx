import React, { useState } from "react";
import NewTodo from "./Components/NewTodo";
import TodoList from "./Components/TodoList";



export interface Todo {
  id: number;
  text: string;
}

const App: React.FC = () => {
const [todos , setTodos]  = useState<Todo[]>([]);

const addTodo = (text: string) => {
  const newTodo: Todo = { id: Date.now(), text };
  setTodos([...todos, newTodo]);
};
  return (
   
    <div style={{textAlign:'center',padding:'25px'}}>
      <h1>Min Köplista</h1>
      <NewTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
   
  );

}

export default App;
