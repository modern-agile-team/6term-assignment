"use strict";

const db = require('../config/db');

class TodolistStorage {

    static loadTodo() {
        return new Promise((resolve, reject)=> {
            const query = "SELECT id,description,is_check FROM todo";
            db.query(query, (err, data)=> {
                if(err) reject (`${err}`);
                resolve (data);
            })
        })
    }

    static reviseTodo(id, is_check) {
        return new Promise((resolve, reject)=> {
            const query = "UPDATE todo SET is_check=(?) WHERE id = (?)";
            db.query(query, [id ,is_check], (err, data)=> {
                if(err) reject (`${err}`);
                resolve (data);
            })
        })
    }

    static plusTodo(id, description) {
        return new Promise((resolve, reject)=>{
            const query = "INSERT INTO todo (id ,description) VALUES(?, ?);";
            db.query(query, [id, description], (err)=>{
                if(err) reject (`${err}`);
                resolve ({success : true});
            });
        }); 
    }
};

module.exports = TodolistStorage;