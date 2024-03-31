import React, { useMemo, useState } from "react";

function UseMemo(){
    const [counter, setCounter] = useState(0);
    const [inputvalue, setInputvalue] = useState(0);

    const changeHandler = e => {
        console.log("changed number is " + parseInt(e.target.value));
        setInputvalue(parseInt(e.target.value));
    }

    // this computation will run even when only setCounter run, it shouldn't run until inputValue doesn't change
    // so we can put this in useMemo which will run only dependency change and will re-render component
    let sum = 0;
    // for(let i=1;i<=inputvalue;i++){
    //     sum += i;
    //     if(i==1){
    //         console.log("sum is getting clculated")
    //     }
    // }

    // we can return value from inner function
    useMemo(()=>{
        for(let i=1;i<=inputvalue;i++){
            sum += i;
            if(i==1){
                console.log("sum is getting clculated")
            }
        }
    }, [inputvalue])

    function clickHandler(){
        setCounter(counter+1);
    }


    return (
        <div>
            <div>
                <input type="number" name="enter number" onChange={(e) => changeHandler(e)} />
                <p>sum from 1 to {inputvalue} is {sum}</p>
            </div>
            <div>
                <button onClick={clickHandler}>{counter}</button>
            </div>
        </div>
    )
}

export default UseMemo