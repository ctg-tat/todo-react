import { useState, useEffect } from "react"
import Header from "./components/Header/Header";
import TodoItem from "./components/TodoItem/TodoItem";

const initialTodo = [
  {
    id: "1",
    name: "Купить продукты",
    date: new Date(),
    checked: false,
  },
  {
    id: "2",
    name: "Заправить автомобиль Lada",
    date: new Date(),
    checked: false,
  }
];

const App = () => {

  // Состоянии задач
  const[todos, setTodos] = useState(initialTodo);

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
