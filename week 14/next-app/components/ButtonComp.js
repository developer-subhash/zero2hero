"use client"
function handler(){
    console.log('button clicked')
}

export default function ButtonComp(){
    return (

    <div>
        <button onClick={handler}>
            click here
        </button>
    </div>
    )
}