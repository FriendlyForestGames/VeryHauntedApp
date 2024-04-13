const nakama = require('../../../../api/nakama/nakama');
const { Client } = require('@heroiclabs/nakama-js');

describe('nakama tests', () => {
  test('It gets client instance', () => {
    expect(nakama.getInstance().client).toBeInstanceOf(Client);
  });
});