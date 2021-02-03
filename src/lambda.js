'use strict';
const dataset = require('./data.json');
const {
  getLocationByZipCode,
  getLocationByCityName,
  getByNearestLocation,
  getLocationByAreCode,
  getLocationByStateAndTimezone,
} = require('./utils');

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello World',
        input: event
      },
      null,
      2
    ),
  };
};

module.exports.getZipCode = async event => {
  if(!event.queryStringParameters) {
    return {
      statusCode: 202,
      body: JSON.stringify({ results: dataset }, null, 2)
    }
  }

  const { zip } = event.queryStringParameters;
  const res = getLocationByZipCode(zip);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        results: res,
      },
      null,
      2
    ),
  };
};

module.exports.getCityName = async event => {
  if(!event.queryStringParameters) {
    return {
      statusCode: 202,
      body: JSON.stringify({results: dataset}, null, 2)
    }
  }

  const { city_name } = event.queryStringParameters;
  const res = getLocationByCityName(city_name);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        results: res,
      },
      null,
      2
    ),
  };
}