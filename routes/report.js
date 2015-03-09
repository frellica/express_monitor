var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.send(JSON.stringify(req.body));
  console.log(req.body);
  var receivedData = JSON.parse(decodeURIComponent(req.body.data));
  console.log(receivedData);
}).get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
