import { useEffect, useState } from 'react'
import React from "react"
import './App.css'
import axios from 'axios'
import UseMemo from './UseMemo';
import MultipleHook from './MultipleHook';
import UseCallback from './UseCallback';
import UseRef from './UseRef';

function App() {
  const [todos, setTodos] = useState([]);
  let [currentTask, setCurrentTask] = useState(-1);

  // runs only on mount, not on rendering
  useEffect(()=>{axios.get("https://sum-server.100xdevs.com/todos")
  .then((res) => {
   const json = res.data;
   console.dir("json data is " + json.todos); //json.todos is an array
   setTodos(json.todos);
   if(json.todos.length > 0){
    setCurrentTask(0);
   }
  })}, []);

  // const count = todos.length;

  // this cause too many re-render
  // if(todos.length > 0){
  //   setCurrentTask(0);
  // }

  const clickHandler = val => setCurrentTask(val);
  let count = 0;

  return (
    <div>
      <UseMemo />
      {
        todos.map((item) => {
          return <Button key={Math.random()} val={count++} clickHandler={clickHandler} />
        })
      }

      <h1>TO DO</h1>

      {currentTask >= 0 ? 
        <Todo title={todos[currentTask].title} description={todos[currentTask].description} /> : <Dummy />
         }

      <MultipleHook />
      <UseCallback />
      <UseRef />
    </div>
  )
}

function Button(props){
  return (
    <div>
      <button onClick={()=>props.clickHandler(props.val)}>{props.val}</button>
    </div>
  )
  }
function Dummy(){
  return (
    <div>
      empty todos
    </div>
  )
}

function Todo(props){
  return (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.description}</h2>
    </div>
  )
}

export default App
