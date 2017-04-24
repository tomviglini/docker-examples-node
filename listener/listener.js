const express = require('express');
const app = express();

app.post('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(8081);
