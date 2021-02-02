const serverless = require('serverless-http');
const express = require('express');
const app = express();
const dataset = require('./data.json');
const { getByZipCode } = require('./utils');

app.get('/', (req, res) => {
  res.send({});
});

app.get('/getByZipCode', (req, res) => {
  const { zip } = req.query;
  const sortedData = getByZipCode(dataset, zip.toString());
  res.send({ results: sortedData });
});

module.exports.handler = serverless(app);
