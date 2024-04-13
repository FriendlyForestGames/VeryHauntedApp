const nakama = require('../../../../api/nakama/nakama');
const { Client } = require('@heroiclabs/nakama-js');

describe('Nakama singleton tests', () => {
  test('It gets client instance', () => {
    expect(nakama.getInstance().client).toBeInstanceOf(Client);
  });

  test('It always gets same instance of singleton', () => {
    expect(nakama.getInstance()).toEqual(nakama.getInstance());
  });
});