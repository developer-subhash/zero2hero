const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const {createTodo, updateTodo} = require('./types')

// import { createTodo, updateTodo } from '../types';
const {todo} = require('./db');

// middleware
// When a request is received, the express.json() middleware checks the Content-Type header of the incoming request. .If it's set to application/json, the middleware parses the JSON data in the request body and populates the request.body object with the parsed data.
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}))

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/todos', async function(req, res){
    const todos = await todo.find({});

    console.log(todos);
    res.json({
        todos: todos
    })
})

app.post('/todo', (req, res) => {
    const dataReceived = req.body;
    const parseData = createTodo.safeParse(dataReceived);
    if(!parseData.success){
        res.status(411).json({
            msg: 'you sent wrong data'
        })
    }

    todo.create({
        title: dataReceived.title,
        description: dataReceived.description,
        completed: false
    })

    res.json({
        msg: 'to-do created'
    })
})

app.put('/completed', async (req, res) => {
    const dataReceived = req.body;
    const parseData = updateTodo.safeParse(dataReceived);
    if(!parseData.success){
        res.status(411).json({
            msg: 'you sent wrong data'
        })
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        meg: 'todo marked comp'
    })
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});