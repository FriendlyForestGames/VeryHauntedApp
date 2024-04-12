const express = require("express");
const router = express.Router();

// using get method to retrieve an account by a specified UUID
router.get("/:accountUuid", (req, res) => {
  //using req to pull parameters from Uuid
  const accountUuid = req.params.accountUuid;
  //using template literals to send message with Uuid interpolated
  res.send(`Retrieving account with UUID: ${accountUuid}`);
});

//export the router!
module.exports = router;
