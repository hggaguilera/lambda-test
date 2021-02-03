const serverless = require('serverless-http');
const express = require('express');
const app = express();
const { getByZipCode, getLocationByCityName, nearestLocation } = require('./utils');

app.get('/endpoints', (req, res) => {
  res.send({ endpoints: { byZipCode: '/getByZipCode', byCity: 'getByCityName' } });
});

app.get('/getByZipCode', (req, res) => {
  const { zip } = req.query;
  const response = getByZipCode(+zip);
  res.send({ results: response });
});

app.get('/getByCityName', (req, res) => {
  const { city_name } = req.query;
  const response = getLocationByCityName(city_name);
  res.send({ results: response });
});

app.get('/getNearestLocation', (req, res) => {
  const { lat, lng } = req.query;
  const location = { lat: lat, lng: lng };
  const response = nearestLocation(location);
  res.send({ results: response });
});

module.exports.handler = serverless(app);
