const serverless = require('serverless-http');
const express = require('express');
const app = express();
const dataset = require('./data.json');
const { getByZipCode } = require('./utils');

app.get('/getByZipCode', (req, res) => {
  const { zip } = req.body;
  const sortedData = getByZipCode(dataset, zip);
  res.send({ results: sortedData });
});

// lambda-like handler function
// module.exports.handler = async (event) => {
//   // do stuff...
// };

module.exports.handler = serverless(app);
