import { useEffect, useRef } from "react";

export default function UseRef(){
    const pref = useRef();

    useEffect(() => {
        setTimeout(()=>{
            // can use document here but not recommended
            pref.current.innerHTML = "content changed";
        }, 5000);
    }, [])

    return (
        <div>
            <hr />
            <hr />
            <h1>useRef react hook</h1>
            <h2>it is used for dom manipulation. using document object from window is not recommended in react</h2>

            <p ref={pref}>this paragraph can be overriden</p>
        </div>
    )
}