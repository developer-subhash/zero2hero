import { useState, memo, useEffect } from 'react'
import './App.css'
import Todo from './Todo';
import CardWrapper from './CardWrapper';
import UseMemo from '../../react-hook2/src/UseMemo';

function App() {
  const [title, setTitle] = useState("subhash");

  // calls only when component gets mounted
  useEffect(() => {
    // we are polling server, asking data every 10 sec
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async (res) => {
         const json = await res.json();
         console.dir("json data is " + json.todos); //json.todos is an array
        })
    }, 10000);
  }, []); // we can fix dependency in array that is when array change then also useEffect runs

  function onClickHandler(){
    setTitle("my name is " + Math.random());
  }

  return (
    <div>
      <button onClick={onClickHandler}>update title</button>
      <Header title={title}></Header>
      <Header title="subhash sam"></Header>
      <Header title="subhash suman"></Header>
      <DynamicHeader></DynamicHeader>
      <Header title="subhash suman"></Header>
      <Header title="subhash suman"></Header>
      <Header title="subhash suman"></Header>
      <br />
      <br />
      <h1>TO DO LIST</h1>
      <br /><br />
      <Todo/>

      {/* <CardWrapper component={<Content />} />
      <CardWrapper component={<Content />} /> */}

      <CardWrapper>
        HI there
        <br />
        <CardWrapper>
          inner hi there
        </CardWrapper>
        <br />
      </CardWrapper>
      <CardWrapper>
        <br />
        second hi there
      </CardWrapper>
    </div>
  )
}

function Content(){
  return (
    <div>
      HI there
    </div>
  )
}

// push state down for dynamic component

function DynamicHeader(){
  const [title, setTitle] = useState("subhash");

  function onClickHandler(){
    setTitle("my name is " + Math.random());
  }

  return (
    <div>
      <button onClick={onClickHandler}>update title</button>
      {title}
    </div>
  )
}


// first way

// function Header({title}){
//   return (
//     <div>
//       {title}
//     </div>
//   )
// }

const Header = memo(function Header({title}){
  return (
    <div>
      {title}
    </div>
  )
})

export default App
