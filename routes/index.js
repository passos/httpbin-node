var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'httpbin(1): HTTP Request & Response Service' });
});

module.exports = router;
