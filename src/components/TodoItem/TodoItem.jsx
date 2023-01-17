import formatDate from "../../utils/formatDate"

const TodoItem = ({ setTodos, todo }) => {

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
}

export default TodoItem;