/* 
* @Author: gilbetliu
* @Date:   2015-03-06 17:08:09
* @Last Modified by:   gilbetliu
* @Last Modified time: 2015-03-09 17:16:55
*/

'use strict';
// var orm = require("orm");

module.exports = {
    mysqlDev: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'profiler',
        connectionLimit: 10,
        supportBigNumbers: true
    },
    // db: orm.connect('mysql://root:123456@localhost/profiler', function (err, db) {
    //     if (err) {
    //         throw err;
    //     }
    //     return db;
    // })
};