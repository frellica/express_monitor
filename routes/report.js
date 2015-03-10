var express = require('express');
var router = express.Router();
var Page = require('../models/page');
var Record = require('../models/record');

router.post('/', function(req, res, next) {
    // res.send(JSON.stringify(req.body));
    // console.log(decodeURIComponent(req.body.data));
    var receivedData = JSON.parse(decodeURIComponent(req.body.data));
    receivedData.forEach(function (r) {
        var page = new Page();
        console.log(r.name);
        page.getByName(r.name, function (err, results) {
            if (err) {
                res.send('page not found');
                return;
            }
            console.log('in routes:', results);
            r.pageId = results[0].page_id;
            var record = new Record();
            record.insert(r, function (err, results) {
                if (err) {
                    console.log('insert failed');
                }
            });
        });
    });
    res.send('done');
}).get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
