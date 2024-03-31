import { Todo } from "./Todo";

export function Todos(props){
    const todos = props.todos;

    return(
        <>
        <h1>hello</h1>
        {/* <div>
                    <h1>{todos[0].title}</h1>
                    <h2>{todos[0].description}</h2>
                    <h2>{todos[0].completed}</h2>
                </div> */}
            {
            todos.map((todo)=>{
                // return (<div>
                //     <h1>{todo.title}</h1>
                //     <h2>{todo.description}</h2>
                //     <h2>{todo.completed}</h2>
                // </div>)
                return <Todo title={todo.title}
                             description={todo.description}
                             completed={todo.completed}
                             key={Math.random()*100} />
            })
            }
        </>
    )
}