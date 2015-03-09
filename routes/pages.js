var express = require('express');
var router = express.Router();
var Page = require('../models/Page');

router.get('/:name', function (req, res, next) {
    var pageName = req.params.name;
    console.log(pageName);
    var page = new Page();
    page.getByName(pageName, function (err, result) {
        if (err) {
            res.send('not found');
        }
        res.send(result);
    });

});
module.exports = router;