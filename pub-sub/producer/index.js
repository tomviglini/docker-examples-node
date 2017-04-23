'use strict';

//const PubSub = require(`@google-cloud/pubsub`);


var PubSub = require('@google-cloud/pubsub')({
  projectId: 'viglini-1',
//  keyFilename: '/path/to/keyfile.json'
});

const express = require('express');
const app = express();

function publishMessage (topicName, data) {
  const pubsub = PubSub();
  const topic = pubsub.topic(topicName);
  return topic.publish(data)
    .then((results) => {
      const messageIds = results[0];
      console.log(`Message ${messageIds[0]} published.`);
      return messageIds;
    });
}

app.get('/pub-sub/producer', function (req, res) {
  publishMessage('test', {
    date: new Date().toString(),
    number: Math.random(1, 100000)
  });
  res.send('Hello from producer')
});

app.listen(80);
