var express = require('express');
var router = express.Router();

var getClientIP = function(req) {
    if (req.header('x-forwarded-for')) {
        return req.header('x-forwarded-for');
    }
    if (req.header('x-real-ip')) {
        return req.header('x-real-ip');
    }
    return req.connection.remoteAddress;
};

router.get('/', function(req, res) {
    res.send( { 'origin': getClientIP(req) } );
});

module.exports = router;
