const geolib = require('geolib');
const dataset = require('./data.json');

const distFromCurrent = (near, coord) => {
  return {
    coord: coord,
    dist: geolib.getDistance(near, coord),
  };
};

const nearestLocation = (location) => {
  const marker = Object.values(dataset)
    .map((data) => distFromCurrent(location, data))
    .sort((a, b) => {
      return a.dist - b.dist;
    })[0];
  const { coord } = marker;
  return { ...coord };
};

const getByZipCode = (zip) => {
  return Object.values(dataset).filter((data) => data.zip.startsWith(zip));
};

const getLocationByCityName = (name) => {
  return Object.values(dataset).filter((data) => data.primary_city.startsWith(name));
};

module.exports = { getByZipCode, getLocationByCityName, nearestLocation };
