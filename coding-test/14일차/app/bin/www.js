"use strict";

const POST = 3001;

const app = require('../app');

app.listen(POST, () => {
    console.log('todolist 서버 가동');
})