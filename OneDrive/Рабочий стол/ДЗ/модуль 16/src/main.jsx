import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//подключаем провайдер и наше зранилище
import { Provider } from 'react-redux'
import { storeTodos } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* провайдер - спец компонент, который позвоолет обращаться к хранилищу дочерним эл-ам
    Поэтому мы наш основной файл оборочиваем в него */}
    <Provider store={storeTodos}>
      <App />
    </Provider>
  </StrictMode>,
)
