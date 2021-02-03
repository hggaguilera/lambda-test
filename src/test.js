// const { hello } = require("./lambda");
const { getLocationByZipCode } = require('./utils');

describe('basic tests', () => {
  test('filter by partial or full zip code', () => {
    const zip = '060';
    const res = getLocationByZipCode(zip);
    // console.log(res);
    expect(res).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          zip: zip,
        }),
      ]),
    );
  });
});
