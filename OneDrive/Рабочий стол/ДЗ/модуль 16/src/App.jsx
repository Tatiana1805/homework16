import './App.css'
import TaskInput from './features/input/TaskInput'
import TaskList from './features/list/TaskList.jsx'
import TaskFilter from './features/filter/TaskFilter.jsx'

const App = () => {
  return (
    <div className='container'>
      <h1>To-Do List</h1>
      <TaskInput />
      <TaskFilter />
      <TaskList />
    </div>
  )
}

export default App
