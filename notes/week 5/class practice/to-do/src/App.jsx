import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todolist, setTodolist] = useState([{
    title: "go to gym",
    description : "go to gym between 6 to 9 AM",
    completed : false
  }, {
    title : "read book",
    description : "read a book deailt between 7 to 9 AM",
    completed : false
  }]); // {title, description, completed}

  return (
    <div>
      {todolist.map(function(todo){
      return <Todo
       title={todo.title}
       description={todo.description}
       completed={todo.completed}
      />
    })}
    </div>
  )
}

function Todo(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h2>{props.completed}</h2>
    </div>
  )
}

export default App
