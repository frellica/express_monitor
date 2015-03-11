var express = require('express');
var router = express.Router();
var Page = require('../models/page');
var Record = require('../models/record');
var Resource = require('../models/resource');
var RESOURCE_TYPES = require('../config/config').RESOURCE_TYPES;
var url = require('url');

// 不需要记录的数据
var resourceFilter = new RegExp('f\.seals\.qq\.com/filestore/10006/da/64/87'
    + '|vv\.video\.qq\.com|rcgi\.video\.qq\.com|.*\.qlogo\.cn|data:image'
    + '|livep\.l\.qq\.com');

var initialResourceTypes = function () {
    // body...
}

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
            r.page_id = results[0].page_id;
            var record = new Record();
            record.insert(r, function (err, results) {
                if (err) {
                    console.log('insert failed');
                } else {
                    console.log(results);
                    r.record_id = results.insertId;
                    record.insertExtend(r, function (err, extendResults) {
                        if (err) {
                            console.log('insert extend failed');
                        } else {
                            console.log(extendResults);
                        }
                    });
                    var resource = new Resource();
                    r.data.resources.forEach(function (resourceRecord) {
                        if (!resourceFilter.test(resourceRecord.url)) {
                            resourceRecord.record_id = results.insertId;
                            resourceRecord.resource_type_id = RESOURCE_TYPES[resourceRecord.type];
                            resourceRecord.rawUrl = resourceRecord.url;
                            rUrl = url.parse(resourceRecord.url);
                            resourceRecord.url = '//' + rUrl.host + rUrl.pathname;
                            resource.insert(resourceRecord, function (err, resourceResult) {
                                if (err) {
                                    console.log('insert resource failed');
                                } else {
                                    console.log(resourceResult.insertId);
                                }
                            });
                        }
                    })
                }
            });
        });
    });
    res.send('done');
}).get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
