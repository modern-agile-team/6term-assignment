"use strict";

const TodolistStorage = require('./TodolistStorage');

class Todo {
    constructor(body) {
        this.body = body;
    }

    async loadtodo() {
        const {description} = await this.body;
        return TodolistStorage.loadTodo(description);
    }

    async todolist() {
        const {description} = await this.body;
        return TodolistStorage.plusTodo(description);
    }
}

module.exports = Todo;