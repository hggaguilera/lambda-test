const getByZipCode = (dataset, zip) => {
  return Object.values(dataset).filter((data) => data.zip.startsWith(zip));
};

const getLocationByCityName = (dataset, name) => {
  return Object.values(dataset).filter((data) => data.primary_city.startsWith(name));
};

module.exports = { getByZipCode, getLocationByCityName };
