import { useEffect, useState } from "react"

export default function MultipleHook(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // both useEffect run simultaneously.
    // useState also run simultaneously
    // setName in 2nd useEffect is the final name because effect run in order as defined

    useEffect(()=>{
        console.log("1st useEffect run");
        setCount(1);
        setName("subhash");
    }, [])

    useEffect(()=>{
        console.log("2nd useEffect run");
        setName("suman")
    }, [])

    // this useEffect will not run with another two at same time.
    useEffect(()=>{
        setTimeout(()=>{
            console.log("3rd useEffect run");
            setName("suman")
        }, 1000)
    }, [])

    return (
        <div>
            <hr />
            <br />
            <h1>Multiple use useEffect</h1>

            <p>{name}</p>
            <p>{count}</p>
        </div>
    )
}