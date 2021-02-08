// const { hello } = require("./lambda");
const { getLocationByCityName } = require('./utils');

describe('basic tests', () => {
  test('filter by partial or full city name', () => {
    const city_name = 'Amherst';
    const res = getLocationByCityName(city_name);
    // console.log(res);
    expect(res).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          primary_city: city_name,
        }),
      ]),
    );
  });
});
