const request = require('request');
const express = require('express');
const app = express();

const formData = {
    test: 'adasd'
};

app.get('/', function (req, res) {

    request.post({
        url: 'http://127.0.0.1:8081/',
        formData: formData
    }, function optionalCallback(err, httpResponse, body) {
        res.send('Hello World!');
    });

//res.send('Hello World!');

});

app.listen(8080);
