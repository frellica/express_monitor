/* 
* @Author: gilbetliu
* @Date:   2015-03-06 17:11:17
* @Last Modified by:   gilbetliu
* @Last Modified time: 2015-03-09 11:35:10
*/

'use strict';

var db = require('./database');
 
var Record = function(record) {
    // this.
}
 
Record.prototype.get = function(id, callback) {
    var sql = "SELECT * FROM records WHERE id =?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });
    });
};