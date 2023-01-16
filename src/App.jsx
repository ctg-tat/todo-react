import { useState, useEffect } from "react"

const formatDate = (date) => {
  const Year = date.getFullYear();
  const Month = date.getMonth() + 1;
  const Day = date.getDate();

  return `${Day}.${Month}.${Year}`;
}

const App = () => {

  // Состоянии задач
  const[todos, setTodos] = useState([
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
  ]);

  // Значение поля
  const [value, SetValue] = useState('');

  // Функция обновления значени
  const onChangeHandle = (e) => {
    SetValue(e.target.value);
  }

  // Функция добавления задачи
  const onSubmitHandle = (e) => {
    e.preventDefault();

    setTodos((prevState) => {
      prevState = [...prevState];
      prevState.push({
        id: Date.now(),
        name: value,
        date: new Date(),
        checked: false,
      });
      return prevState;
    });

    SetValue('');
  }

  // Смена статуса
  const onCheckedToggle = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];
      prevState = prevState.map((todo) => {
        if(todo.id === id){
          return {
            ...todo,
            checked: !todo.checked
          }
        }
        return todo;
      });
      return prevState;
    })
  }

  // Функция удаления
  const onDeleteTodoById = (id) => {
    setTodos((prevState) => {
      prevState = [...prevState];
      prevState = prevState.filter((todo) => todo.id !== id);
      return prevState;
    });
  }

  return(
    <div className="layout">
      <div>
        <form onSubmit={(e) => onSubmitHandle(e)} className="form">
          <h2 className="title">Добавить задачу</h2>
          <input type="text" placeholder="Купить молоко..." onChange={(e) => onChangeHandle(e)} value={value}/>
        </form>
      </div>

    {/* Все задачи */}
      <div>
        {/* Одна задача */}
        {
          todos.map((todo) => {
            return(
              <div className="todo">
                <h3 className="title_todo">{todo.name} ({formatDate(todo.date)})</h3>
                <div>
                  <button onClick={() => onCheckedToggle(todo.id)} className="green_btn">
                    {
                      todo.checked ? "Не выполнено" : "Выполено"
                    }
                  </button>
                  <button onClick={() => onDeleteTodoById(todo.id)} className="red_btn">Удалить</button>
                </div>
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default App;
