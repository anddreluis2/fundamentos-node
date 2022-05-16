const express = require('express');

const app = express();

//localhost
app.get("/", (request, response) => {
    return response.send('hello world!')
})

app.listen(3333);