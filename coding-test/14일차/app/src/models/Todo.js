"use strict";

const TodolistStorage = require('./TodolistStorage');

class Todo {
    constructor(body) {
        this.body = body;
    }

    async loadtodo() {
        const {load} = await this.body;
        return TodolistStorage.loadTodo(load);
    }

    async checktodo() {
        const {id, is_check} = await this.body;
        return TodolistStorage.reviseTodo(id, is_check);
    }

    async todolist() {
        const {id, description} = await this.body;
        return TodolistStorage.plusTodo(id ,description);
    }
}

module.exports = Todo;