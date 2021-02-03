const serverless = require('serverless-http');
const express = require('express');
const app = express();
const dataset = require('./data.json');
const { getByZipCode, getLocationByCityName } = require('./utils');

app.get('/endpoints', (req, res) => {
  res.send({ endpoints: { byZipCode: '/getByZipCode', byCity: 'getByCityName' } });
});

app.get('/getByZipCode', (req, res) => {
  const { zip } = req.query;
  const sortedData = getByZipCode(dataset, zip.toString());
  res.send({ results: sortedData });
});

app.get('/getByCityName', (req, res) => {
  const { city_name } = req.query;
  const response = getLocationByCityName(dataset, city_name);
  res.send({ results: response });
});

module.exports.handler = serverless(app);
