'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/pub-sub/consumer', function (req, res) {
  console.log(JSON.stringify(req.body));
  res.send('Hello World!')
});

app.listen(80, function () {
  console.log('Example app listening on port 3000!')
});
