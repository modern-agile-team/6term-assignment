"use strict";

const mysql = require('mysql');

const db = mysql.createConnection({
    host: "todolistdb.cy8ym9wg6atj.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "skdiljj0421",
    database: "doublejdb",
})

db.connect();
module.exports = db;