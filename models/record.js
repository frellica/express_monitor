/* 
* @Author: gilbetliu
* @Date:   2015-03-06 17:11:17
* @Last Modified by:   gilbetliu
* @Last Modified time: 2015-03-10 17:03:44
*/

'use strict';

var db = require('./database');
 
var Record = function(record) {
}
 
Record.prototype.insert = function(r, callback) {
    var sql = 'INSERT INTO records (`page_id`, `url`, `timestamp`, `first_paint_finished`, '
        + '`first_screen_finished`, `dom_content_loaded`, `load` ) VALUES (?, ?, ?, ?, ?, ?, ?)';
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        console.log((r.timestamp / 1000).toFixed());
        var query = connection.query(sql, [r.pageId, r.url, (r.timestamp / 1000).toFixed(), r.data.firstPaintFinished,
            r.data.firstScreenFinished, r.data.DOMContentLoaded, r.data.load], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });
        console.log(query.sql);
    });
};

module.exports = Record;