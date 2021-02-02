const getByZipCode = (dataset, zip) => {
  return Object.values(dataset).filter((data) => data.zip.startsWith(zip));
};

module.exports = { getByZipCode };
