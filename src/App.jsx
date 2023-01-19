import { useState, useEffect } from "react"
import Header from "./components/Header/Header";
import TodoItem from "./components/TodoItem/TodoItem";

const initialTodo = [];

const App = () => {

  // Состоянии задач
  const[todos, setTodos] = useState(initialTodo);

  // Получение данных  из localStorage
  useEffect(() => {
    if(localStorage.getItem('todos') !== null){
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, []);

  return(
    <div className="layout">
      <Header setTodos={setTodos}/>
      <div>
        {todos.map((todo) => <TodoItem setTodos={setTodos} todo={todo} />)}
      </div>
    </div>
  )
}

export default App;
