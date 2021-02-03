const geolib = require('geolib');
const dataset = require('./data.json');

const distFromCurrent = (near, coord) => {
  return {
    coord: coord,
    dist: geolib.getDistance(near, coord),
  };
};

/**
 * search by closest latitude/longitude
 *
 * @param   {Object}  location
 * @return  {Array}
 */
const getByNearestLocation = (location) => {
  const marker = Object.values(dataset)
    .map((data) => distFromCurrent(location, data))
    .sort((a, b) => {
      return a.dist - b.dist;
    })[0];
  const { coord } = marker;
  return { ...coord };
};

/**
 * search by full or partial zipcode
 *
 * @param   {Number}  zip
 * @return  {Array}
 */
const getLocationByZipCode = (zip) => {
  return Object.values(dataset).filter((data) => data.zip.startsWith(zip));
};

/**
 * search by full or partial city name
 *
 * @param   {String}  name
 * @return  {Array}
 */
const getLocationByCityName = (name) => {
  return Object.values(dataset).filter((data) => data.primary_city.startsWith(name));
};

/**
 * search by area code
 *
 * @param   {Number}  areaCode
 * @return  {Array}
 */
const getLocationByAreCode = (areaCode) => {
  return Object.values(dataset).filter((data) => data.area_codes === areaCode);
};

/**
 * search by state and timezone
 *
 * @param   {String}  state
 * @param   {String}  timezone
 * @return  {Array}
 */
const getLocationByStateAndTimezone = (state, timezone) => {
  return Object.values(dataset).filter(
    (data) => data.state === state && data.timezone === timezone,
  );
};

module.exports = {
  getLocationByZipCode,
  getLocationByCityName,
  getByNearestLocation,
  getLocationByAreCode,
  getLocationByStateAndTimezone,
};
