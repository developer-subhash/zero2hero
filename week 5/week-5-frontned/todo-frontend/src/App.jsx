import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'


function App() {
// const todos=[{
//   title: "Play badminton",
//   description: "We need to play badmi8ntoion",
//   completed: "true"
// },{
//   title: "Play cricket",
//   description: "We need to play cricket",
//   completed: "true"
// }]
const [todos,setTodos]= useState([]);

useEffect(()=>{
  fetch('http://localhost:5000/todos')
  .then((res)=>{
    return res.json();
  }).then((data) => {
    console.log(data);
    // const newTodos = [...data];
    setTodos(data.todos);
  })
},[])

const addTodoHandler = (todo) => {
  console.log(todo);
  // todos.push(todo);
  const newTodos = [...todos, todo];

  fetch('http://localhost:5000/todo',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // You might need to include additional headers, such as authorization tokens
      // if required by the API you are interacting with.
    },
    body: JSON.stringify(todo),
  }).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
    // Handle the response data as needed
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors
  });

  setTodos(newTodos);
}

  return (
    <>
      <h1>Hello</h1>
      <CreateTodo addTodoHandler={addTodoHandler} />
      <Todos todos={todos}/>
    </>
  )
}

export default App
