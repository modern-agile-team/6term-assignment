"use strict";

const db = require('../config/db');

class TodolistStorage {

    static loadtodo() {
        return new Promise((resolve, reject)=> {
            const query = "SELECT * FROM todo WHERE description";
            db.query(query, [description], (err, data)=> {
                if(err) reject (`${err}`);
                resolve (data);
            })
        })
    }

    static plusTodo(description) {
        return new Promise((resolve, reject)=>{
            const query = "INSERT INTO todo (description) VALUES(?);";
            db.query(query, [description], (err)=>{
                if(err) reject (`${err}`);
                resolve ({success : true});
            });
        }); 
    }
};

module.exports = TodolistStorage;