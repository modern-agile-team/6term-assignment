"use strict";

//model을 불러온다.
const Todo = require('../../models/Todo');

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login');
    },
    register: (req, res)=> {
        res.render('home/register');
    },
    todolist: (req, res)=> {
        res.render('home/todolist');
    }
};

const process = {
    // login: (req, res) => {
    //     const user = new User(req.body);
    //     const response = user.login();
    //     return res.json(response);
    // },
    // register: (req, res) => {
    //     const user = new User(req.body);
    //     const response = user.register();
    //     return res.json(response);
    // },
    todolist: async (req, res) => {
        const todo = new Todo(req.body);
        const response = await todo.todolist();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};