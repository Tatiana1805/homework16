//эл-т кот позволяет взаимодей-ть с нашим хранилищем (store.js) с помощью создания slice
import { createSlice } from "@reduxjs/toolkit";

// Начальное состояние нашего приложения To-Do List
const initialState = {
    tasks: [], //здесь будет добавляться наш список задач
    filter: 'all', //Здесь мы будем фильтровать задачи по темам (все, выполненые, невыполненные)
}

//тут у нас будут редьюсеры и действия
const Slice = createSlice({
    name: 'todos', //не обязательный эл-т, нужен для того, если у нас много слайсов (уник название)
    initialState,
    //набор дей-ий, благодаря кот мы можем производить изменения в нашем store
    reducers:{
        //Добавление задач
        //state - наше хранилище, action - информация что мы передаем
        addTask: (state, action) => {
            //обращаемся к списку задач и пушим. Создаем id, text, completed
            state.tasks.push({
                id: Date.now(),
                text: action.payload, //payload - аргумент, кот возвращает наше значение в функцию
                completed: false  //по умолчанию статус задания не выполнен
            })
        },
        //удаление по ИД (фильтруем массив и убираем эл-т, у которого сошелся с ИД, кот мы кликнулм)
        delTask: (state, action) =>{
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            )
        },
        toggleTask: (state, action) => {
            //находим задачу с помощью find 
            const task = state.tasks.find((task) => task.id === action.payload)
            if(task) {
                //и меняем статус
                task.completed = !task.completed;
            }
        },
        setTask: (state, action) => {
            //проходимся по фильтру и заносим в action.payload нужные
            state.filter = action.payload
        }      
    },

})

export default Slice.reducer;
//экспорт наших функций в разные компоненты
export const { addTask, delTask, toggleTask, setTask } = Slice.actions;