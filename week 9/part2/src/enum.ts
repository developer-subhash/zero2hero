type KeyInput = "up" | "down" | "left" | "right";

function doAction(keyPressed: KeyInput){
    if(keyPressed =='up'){
        console.log('key up pressed')
    }
    else{
        console.log('something pressed');
    }
}

doAction("up")

// another better way - use enum
// enum is collection of some constant values
enum Direction {
    up,
    down,
    left,
    right
}

function doAction2(keyPressed: Direction){
    if(keyPressed == Direction.up){
        console.log('key up pressed')
    }
    else{
        console.log('something pressed');
    }
}

doAction2(Direction.up)
console.log(Direction.up); // default value = up-0, down-1, left-2 & right-3 set by JS

// we can set value of own

enum ResponseStatus {
    Success = 200,
    NotFound = 411,
    Error = 500
}

import express from "express";

const app = express();

app.get("/", (req: any, res: any) => {
    console.log('got some query');
    if(!req.query){
        return res.status(ResponseStatus.NotFound).json({'data' : 'provide valid query'})
    }
})

app.listen(8080);