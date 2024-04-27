const express = require('express');
const nakama = require('../api/nakama/nakama');
const router = express.Router();

// using get method to retrieve an account by a specified UUID
router.get('/:accountUuid', async (req, res) => {
  const client = nakama.getInstance().client;

  const customId = 'some-custom-id';
  const create = true;
  const session = await client.authenticateCustom(customId, create, 'mycustomusername');
  console.info('Successfully authenticated:', session);//

  //using req to pull parameters from Uuid
  const accountUuid = req.params.accountUuid;
  //using template literals to send message with Uuid interpolated
  res.send(`Retrieving account with UUID: ${accountUuid}`);
});

//export the router!
module.exports = router;
