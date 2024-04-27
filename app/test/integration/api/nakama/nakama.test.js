const nakama = require('../../../../api/nakama/nakama');

describe('Nakama integration tests', () => {
  test('It makes API call to Nakama', async () => {
    const client = nakama.getInstance().client;

    const customId = 'some-custom-id';
    const create = true;
    try {
      const session = await client.authenticateCustom(customId, create, 'mycustomusername');
    } catch (e) {
      console.log(e);
    }
    console.info('Successfully authenticated:', session);
  });
});