const express = require('express');

const app = express();

//localhost
app.get("/", (request, response) => {
    return response.send({message: 'hello world!'})
})

app.listen(3333);