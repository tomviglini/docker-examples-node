'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/pub-sub/consumer', function (req, res) {
  console.log(JSON.stringify(req.body));
  res.send('Hello World!')
});

app.get('*', function (req, res) {
  res.send('Hello World!')
});

app.listen(80);
