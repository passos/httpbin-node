var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send( { 'headers': req.headers } );
});

module.exports = router;
