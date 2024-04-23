const express = require("express");
const router = express.Router();
const {
  readAccountByUuid,
} = require("../controllers/accounts/read-account-by-uuid-controller");

// using get method to retrieve an account by a specified UUID
router.get("/:accountUuid", readAccountByUuid);

//export the router!
module.exports = router;
