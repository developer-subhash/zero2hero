import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [message, setMessage] = useState<string>("");
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080'); // connect to websocket server. just like fetch connect to http server

    // once connected successfully
    socket.onopen = () => {
      console.log('websocket server connected');
      setSocket(socket);
    }

    // // on getting any message
    // socket.onmessage = (message) => {
    //   console.log('received message ' + message.data)
    //   setMessage([...messages, message.data])
    // }
  }, [])

  if(!socket){
    return <>
      <h1>connecting to websocket server ...</h1>
    </>
  }

  // on getting any message
  socket.onmessage = (message) => {
    console.log('received message ' + message.data)
    // const newMessages = [...messages, message.data];
    // console.log(newMessages);
    setMessage(message.data)
  }

  return (
    <>
      <h1>hello react & socket world</h1>
   
      {
        message
      }

      <br />
      <br />

      <input type="text" name="" id=""  onChange={(e) => {setInput(e.target.value)}}/>
      <button onClick={() => {socket.send(input)}}>send message</button>
    </>
  )
}

function MessageComp(props:{message:string, key: number}){
  console.log('hi')
  return <>
    <h1>{props.message}</h1>
  </>
}

export default App
