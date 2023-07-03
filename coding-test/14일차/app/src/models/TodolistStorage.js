"use strict";

const db = require('../config/db');

class TodolistStorage {
    static plusTodo(description) {
        return new Promise((resolve, reject)=>{
            const query = "INSERT INTO todo (description) VALUES(?);";
            db.query(query, [description], (err, data)=>{
                if(err) reject (`${err}`);
                resolve ({success : true});
            });
        }); 
    }
};

module.exports = TodolistStorage;