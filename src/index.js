const serverless = require('serverless-http');
const express = require('express');
const app = express();
const {
  getLocationByZipCode,
  getLocationByCityName,
  getByNearestLocation,
  getLocationByAreCode,
  getLocationByStateAndTimezone,
} = require('./utils');

app.get('/endpoints', (req, res) => {
  res.send({
    endpoints: {
      byZipCode: '/getByZipCode',
      byCity: 'getByCityName',
      byNearLocation: 'getNearestLocation',
      byAreaCode: 'getByAreaCode',
      byStateAndTimezone: 'getByStateAndTimezone',
    },
  });
});

app.get('/getByZipCode', (req, res) => {
  const { zip } = req.query;
  const response = getLocationByZipCode(+zip);
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
  const response = getByNearestLocation(location);
  res.send({ results: response });
});

app.get('/getByAreaCode', (req, res) => {
  const { area_code } = req.query;
  const response = getLocationByAreCode(area_code);
  res.send({ results: response });
});

app.get('/getByStateAndTimezone', (req, res) => {
  const { state, timezone } = req.query;
  const response = getLocationByStateAndTimezone(state, timezone);
  res.send({ results: response });
});

module.exports.handler = serverless(app);
