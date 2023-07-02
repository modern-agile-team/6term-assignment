"use strict";

const mysql = require('mysql');

const db = mysql.createConnetion({
    host: "todolistdb.cy8ym9wg6atj.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "skdiljj0421",
    database: "todolistdb",
});

db.connet();

module.exports = db;

