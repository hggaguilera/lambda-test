"use strict";
const dataset = require("./data.json");
const {
  getLocationByZipCode,
  getLocationByCityName,
  getByNearestLocation,
  getLocationByAreCode,
  getLocationByStateAndTimezone,
} = require("./utils");

module.exports.endpoints = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        getZipCode: "/getLocByZipCode",
        getCityName: "/getLocByCityName",
        getNearestLocation: "/getLocByNearestLocation",
        getAreaCode: "/getLocByAreaCode",
        getTimezone: "/getLocByStateAndTimezone",
      },
      null,
      2
    ),
  };
};

module.exports.getZipCode = async (event) => {
  if (!event.queryStringParameters) {
    return {
      statusCode: 202,
      body: JSON.stringify({ results: dataset }, null, 2),
    };
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

module.exports.getCityName = async (event) => {
  if (!event.queryStringParameters) {
    return {
      statusCode: 202,
      body: JSON.stringify({ results: dataset }, null, 2),
    };
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
};

module.exports.getNearestLocation = async (event) => {
  if (!event.queryStringParameters) {
    return {
      statusCode: 202,
      body: JSON.stringify({ results: dataset }, null, 2),
    };
  }

  const { lat, lng } = event.queryStringParameters;
  const location = { lat: lat, lng: lng };
  const res = getByNearestLocation(location);

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

module.exports.getAreaCode = async (event) => {
  if (!event.queryStringParameters) {
    return {
      statusCode: 202,
      body: JSON.stringify({ results: dataset }, null, 2),
    };
  }

  const { area_code } = event.queryStringParameters;
  const res = getLocationByAreCode(area_code);

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

module.exports.getTimezone = async (event) => {
  if (!event.queryStringParameters) {
    return {
      statusCode: 202,
      body: JSON.stringify({ results: dataset }, null, 2),
    };
  }

  const { state, timezone } = event.queryStringParameters;
  const res = getLocationByStateAndTimezone(state, timezone);

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