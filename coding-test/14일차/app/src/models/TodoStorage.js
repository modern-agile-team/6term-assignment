"use strict";

const db = require('../config/db');

class TodoStorage {
    static getText(text) {
        return new Promise((resolve, reject)=> {
            const query = "INSERT INTO todo(description) VALUSE(?);";
            db.query(query, [description], (err)=> {
                if(err) reject(err);
                resolve({success : true});
            })
        })
    }
};

module.exports = TodoStorage;