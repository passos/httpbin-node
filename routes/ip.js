var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send( { 'ip': req.header('X-Real-IP') } );
});

module.exports = router;
