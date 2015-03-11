/* 
* @Author: gilbetliu
* @Date:   2015-03-06 17:08:09
* @Last Modified by:   gilbetliu
* @Last Modified time: 2015-03-11 18:33:34
*/

'use strict';
// var orm = require("orm");

module.exports = {
    MYSQL_DEV: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'profiler',
        connectionLimit: 10,
        supportBigNumbers: true
    },
    RESOURCE_TYPES: {
        'css': 1,
        'js': 2,
        'img': 3,
        'doc': 4
    }
    // db: orm.connect('mysql://root:123456@localhost/profiler', function (err, db) {
    //     if (err) {
    //         throw err;
    //     }
    //     return db;
    // })
};