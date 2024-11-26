import { useDispatch, useSelector } from "react-redux";
import './TaskFilter.css'
import { setTask } from '../todoReducer.js'

const TaskFilter = () =>{
    const dispatch = useDispatch()
    //из todos (store) получаем наш фильтр (из initialState)
    const statusFilter = useSelector((state) => state.todos.filter)


    return(
        <div className="container-filter">
            {/* фильтруем только те задачи, у которых нужный нам статус */}
            <button className="button-filter"
            //фильтруем нужные задачи
                 onClick={() => dispatch(setTask('all'))}
            //деактивируем кнопку при нажатии на другую
                disabled={statusFilter === 'all'}
            >Все</button>
            <button className="button-filter"
                onClick={() => dispatch(setTask('completed'))}
                disabled={statusFilter === 'completed'}                
                >Выполненные</button>
            <button className="button-filter"
                onClick={() => dispatch(setTask('incomplete'))}
                disabled={statusFilter === 'incomplete'}                            
            >Невыполненные</button>
        </div>

    )
}

export default TaskFilter;