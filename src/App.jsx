import { useState } from 'react'
import './App.css'
import { Todos } from './components/Todos'


function App() {
  const toggleCompleted = (id) => {
    const updatedTodo =  todos.map((todo)=>{
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })

    setTodos(updatedTodo)
  }
  const toggleDelete = (id) => {
    let updatedTodo = todos.filter(todo => todo.id != id);
    setTodos(updatedTodo);
  }
  const toggleAdd = (title) =>{
    const data = {
      id : todos.length + 1,
      title,
      completed : false
    }
    const updatedTodo = [...todos, data]
    setTodos(updatedTodo)

  }

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  return (
    <>
    <h1 className='tittle'>My Todo List!</h1>
    <Todos todos={todos} toggleAdd={toggleAdd} toggleDelete={toggleDelete} toggleCompleted={toggleCompleted}/>
    </>
  )
}

export default App
