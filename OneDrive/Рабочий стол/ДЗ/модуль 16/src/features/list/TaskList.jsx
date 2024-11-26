import { useDispatch, useSelector } from "react-redux";
import './TaskList.css'
import { delTask, toggleTask } from "../todoReducer";

const TaskList = () => {
//получение задач из хранилища redux (store) с помощью useSelector
    const tasks = useSelector((state) => {
        if(state.todos.filter === 'completed') {
            //выводим только выполнениые задания
            return state.todos.tasks.filter((task) => task.completed)
        } else if(state.todos.filter === 'incomplete') {
            //выводим невыполненные задания (!task.completed => completed = false)
            return state.todos.tasks.filter((task) => !task.completed)
        }
        //вывод всех (all) наших задач в список
        return state.todos.tasks; 
    })
 //useDispatch отправляет данные в store
    const dispatch = useDispatch()

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}> 
                {/* при клике на задачу меняется статус */}
                    <p onClick={() => dispatch(toggleTask(task.id))}>
                        {task.completed ? '✓ ' : ''} 
                        {task.text}
                    </p>
                    {/* подключили функцию удаления из store */}
                    <button onClick={() => dispatch(delTask(task.id))}>Удалить</button>
                </li>
            ))}
        </ul>
    )
}

export default TaskList;