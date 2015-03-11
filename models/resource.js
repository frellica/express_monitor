/* 
* @Author: gilbetliu
* @Date:   2015-03-10 17:49:03
* @Last Modified by:   gilbetliu
* @Last Modified time: 2015-03-11 18:35:55
*/

'use strict';

var db = require('./database');
 
var Resource = function(resource) {
}
 
Resource.prototype.insert = function(r, callback) {
    var sql = 'INSERT INTO resources (`record_id`, `url`, `raw_url`, `resource_type_id`, '
        + '`response_size`, `response_duration`, `response_dns_lookup_duration`, '
        + '`response_waiting_duration`, `response_download_duration`, `width`, `height`) '
        + 'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        var query = connection.query(sql, [r.record_id, r.url, r.rawUrl, r.resource_type_id,
            r.ResponseSize, r.ResponseDuration, r.ResponseDNSLookupDuration, r.ResponseWaitingDuration,
            r.ResponseDownloadDuration, r.width || 0, r.height || 0], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            connection.release();
            callback(false, results);
        });
        console.log(query.sql);
    });
};

Resource.prototype.getTypeId = function(typeName, callback) {
    var sql = "SELECT resource_type_id FROM resource_types";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        var query = connection.query(sql, [typeName], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            console.dir('in models: ', results);
            connection.release();
            callback(false, results);
        });
        console.log(query.sql);
    });
};

module.exports = Resource;