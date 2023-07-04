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
        const {description} = await this.body;
        return TodolistStorage.reviseTodo(description);
    }

    async todolist() {
        const {description} = await this.body;
        return TodolistStorage.plusTodo(description);
    }
}

module.exports = Todo;