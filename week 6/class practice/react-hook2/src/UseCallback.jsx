import { memo, useCallback, useState } from "react";

export default function UseCallback(){
    const [count, setCount] = useState(9);

    setTimeout(()=>{
        setCount(Math.random());
    }, 5000);

    const firstName = "subhash";
    const secondName = "sam";

    // cause re-render Dummy component also while re-rendering of this parent component
    // const getName = ()=> {
    //     return firstName + secondName;
    // }

    const getName = useCallback(()=>{
        return firstName + secondName;
    }, [firstName, secondName]); // only these dependency change then only Dummy component will be re-rendered

    return (
        <div>
            <h1>{count}</h1>
            <br />
            <br /><br />
            <Dummy name={getName}/>
        </div>
    )
}

// function Dummy({name}){
//     console.log("re-rendered")
//     return (
//         <div>
//             <h1>My name is {name()}</h1>
//         </div>
//     )}


const Dummy = memo(function Dummy({name}){
    console.log("re-rendered")
    return (
        <div>
            <h1>My name is {name()}</h1>
        </div>
    )
})