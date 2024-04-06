import { useContext, useState } from "react"
import CountContext from "./Context";

export default function PropDrilling(){
    const [count, setCount] = useState(0);

    return (
        <div>
            {/* <Count count={count} setCount={setCount} /> */}

            {/* use context for passing props */}
            <CountContext.Provider value={count}>
                <Count setCount={setCount} />
            </CountContext.Provider>
            {count}
        </div>
    )
}

// in this component we don't use setCount prop, we just need to pass it down to next child component
// this is prop drilling where we don't use prop in a component but need to pass it down to child
// if the tree is huge then in all subsequent child, this prop come and make code difficult to read & manage
// we sort this using context-api

// function Count({count, setCount}){
//     return (
//         <div>
//             {count}
//             <Button count={count} setCount={setCount} />
//         </div>
//     )
// }

// using context
function Count({setCount}){
    return (
        <div>
            <Button setCount={setCount} />
        </div>
    )
}

// function Button({count, setCount }){
//     return (
//         <div>
//             <button onClick={() => {setCount(count+1)}}>Increase</button>
//             <button onClick={() => {setCount(count-1)}}>Decrease</button>
//         </div>
//     )
// }

// use context
function Button({setCount }){
    const count = useContext(CountContext);
    return (
        <div>
            <button onClick={() => {setCount(count+1)}}>Increase</button>
            <button onClick={() => {setCount(count-1)}}>Decrease</button>
        </div>
    )
}