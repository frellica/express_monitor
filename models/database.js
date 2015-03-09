/* 
* @Author: gilbetliu
* @Date:   2015-03-06 17:09:37
* @Last Modified by:   gilbetliu
* @Last Modified time: 2015-03-09 16:38:08
*/

'use strict';

var mysql = require('mysql');
var config = require('../config/config');
 
var pool = mysql.createPool(config.mysqlDev);
 
exports.db = pool;