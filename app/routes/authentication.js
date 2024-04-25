const express = require('express');
const router = express.Router();

/* GET home page. */
router.POST('app/routes/authentication', function(req, res, next) {
  res.render('authentication', { title: 'Express' });
});

module.exports = router;
