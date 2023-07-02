"use strict";

const TodoStorage = require('./TodoStorage');



class Todo {
    constructor(body) {
        this.body = body;
    }

    async newText() {
        const text = this.body;
        const response = await TodoStorage.newText(text);
        return response;
    }
};

module.exports = Todo;