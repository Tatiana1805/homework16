import { useState } from 'react'
import './TaskInput.css'
import { useDispatch } from 'react-redux'
import { addTask } from '../todoReducer'

const TaskInput = () => {

    const [task, setTask] = useState('')
//С посощью useDispatch мы передаем данные в хранилище
    const dispatch = useDispatch()

    //Добавление задач
    const addSubmit = (e) => {
        e.preventDefault()
        //trim() проверка на пустоту. Если ввели пробелы вместо текста, то пробелы удаляются и если пусто функция не выполняется
        if(task.trim()) {
            //отправляеем значение task в addTask (todoReducer.js) и там обрабатывается. task отправляется в payload
            dispatch(addTask(task))
            setTask('')
        }
    }

    return (
        <form onSubmit={addSubmit}>
            <input type="text" placeholder="Введите задачи"
            //помещается значение
            value={task} 
            //вызываем функцию, чтобы изменить значение task
            onChange={(e) => setTask(e.target.value)} />
            <button type="submit">Отправить</button>
        </form>
    )
}

export default TaskInput