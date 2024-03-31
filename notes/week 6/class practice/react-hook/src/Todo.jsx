import React, { useState } from 'react';


function Todo(){
    const [todo, setTodo] = useState([]);

    const clickHandler = () => {
        let newtodo = [{
            title : 'go to gym',
            description : 'go gym in morning',
            completed : false
        }];
        setTodo([...todo, ...newtodo]);
    }

    return (
        <div>
            <button onClick={clickHandler}>add todo</button>
            {
                todo.map(function(task){
                    return <Item key={Math.random()} title={task.title} description={task.description} completed={task.completed} />
                })
            }
        </div>
    )
}

function Item(props){
    return (
        <div>
            <h1>
                {props.title}
            </h1>
            <h2>{props.description}</h2>
            <h2>{props.completed}</h2>
        </div>
    )
}

export default Todo