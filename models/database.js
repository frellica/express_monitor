/* 
* @Author: gilbetliu
* @Date:   2015-03-06 17:09:37
* @Last Modified by:   gilbetliu
* @Last Modified time: 2015-03-11 17:04:39
*/

'use strict';

var mysql = require('mysql');
var config = require('../config/config');
 
var pool = mysql.createPool(config.MYSQL_DEV);
 
exports.pool = pool;