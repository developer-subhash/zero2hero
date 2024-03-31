

function CardWrapper({children}){
    return (
        // <div style={{border: "2px solid black"}}>
        //     {props.component}
        // </div>

        // another way
        <div style={{border: "2px solid black"}}>
            {children}
        </div>
    )
}

export default CardWrapper