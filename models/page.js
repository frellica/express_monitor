/* 
* @Author: gilbetliu
* @Date:   2015-03-06 17:51:02
* @Last Modified by:   gilbetliu
* @Last Modified time: 2015-03-09 16:44:32
*/

'use strict';

var db = require('./database');
 
var Page = function() {
}
 
Page.prototype.getByName = function(name, callback) {
    var sql = "SELECT * FROM pages WHERE name =?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [name], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            console.dir(results);
            callback(false, results);
        });
    });
};


module.exports = Page;