const express = require("express");
const router = express.Router();

// using get method to retrieve an account by a specified UUID
router.get("/accounts/:accountUuid", (req, res));
