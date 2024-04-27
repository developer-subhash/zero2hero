const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('req received')
    return res.json("hello")
})

// use -e option for passing env var to docker
// docker run -p 9000:9000 -e project_name='simple backend application' simple-backend

// print env variable
console.log(process.env.project_name);

app.listen(9000);