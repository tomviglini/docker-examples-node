const request = require('request');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    request.get({url: 'http://localhost/countries'}, (err, httpResponse, body) => {
		res.send(body)
	});
});

app.listen(8080);
