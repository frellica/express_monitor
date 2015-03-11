var express = require('express');
var router = express.Router();
var Page = require('../models/page');
var Resource = require('../models/resource');

router.get('/page/:name', function (req, res, next) {
    var pageName = req.params.name;
    console.log(pageName);
    var page = new Page();
    page.getByName(pageName, function (err, result) {
        if (err) {
            res.send('not found');
        } else {
            res.send(result);
        }
    });
}).get('/resource-type/:name', function (req, res, next) {
    var typeName = req.params.name;
    console.log(typeName);
    var resource = new Resource();
    resource.getTypeId(typeName, function (err, result) {
        if (err) {
            res.send('not found');
        } else {
            res.send(result);
        }
    });
});

module.exports = router;