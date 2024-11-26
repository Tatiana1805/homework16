//папка для Redux
//модуль для настройки хранилища (вся инфа там)
import { configureStore } from "@reduxjs/toolkit";
//эл-т с помощью которого мы будем управлять данными в хранилище
import todoReducer from '../features/todoReducer'

//создаем хранилище
export const storeTodos = configureStore({
    reducer: {
        //эл-, кот будет управлять хранилищем
        todos: todoReducer,
    },
})
