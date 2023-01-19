import { useState } from "react"

const Header = ({ setTodos }) => {
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
        localStorage.setItem('todos', JSON.stringify(prevState));
        return prevState;
        });

        SetValue('');
    }

    return(
        <div>
            <form onSubmit={(e) => onSubmitHandle(e)} className="form">
                <h2 className="title">Добавить задачу</h2>
                <input type="text" placeholder="Купить молоко..." onChange={(e) => onChangeHandle(e)} value={value}/>
            </form>
        </div>
    );
}

export default Header;