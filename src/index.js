const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/message', (req, res) => {
  res.send('Hello World');
});

// lambda-like handler function
// module.exports.handler = async (event) => {
//   // do stuff...
// };

module.exports.handler = serverless(app);
