const express = require('express');
const router = express.Router();

router.post('/', function(req, res, next) {
  const body = req.body;
  const email = body.email;
  const password = body.password;
  res.send({ email: email, password: password });
});

module.exports = router;
