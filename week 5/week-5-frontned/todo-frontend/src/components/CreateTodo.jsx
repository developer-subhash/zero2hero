export function CreateTodo(props){
    let title;
    let description;
const titleHandler = (event)=>{
    console.log(event.target.value);
    title= event.target.value;
} 
const deacriptionHandler = (event)=>{
    console.log(event.target.value);
    description=event.target.value;
} 
const clickHandler = (event)=>{
    console.log("handle clicked", title, description)
    props.addTodoHandler({title: title, description: description, completed: false})

}
    return(
        <>
        <input type="text" placeholder="title" id="" onChange={titleHandler}/>
        <input type="text" placeholder="description" id="" onChange={deacriptionHandler}/>
        <button type="submit" onClick={clickHandler}>Add todo</button>
        </>
    )
}