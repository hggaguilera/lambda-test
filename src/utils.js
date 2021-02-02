const getByZipCode = (dataset, zip) => {
  Object.values(dataset).filter((data) => data.zip.includes(zip));
};

module.exports = { getByZipCode };
