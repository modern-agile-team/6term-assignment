"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require('./home.ctrl');

router.get("/todolist", ctrl.output.todolist); //조회
router.get("/loadtodo", ctrl.process.loadtodo);

router.post("/todolist", ctrl.process.todolist); //데어터 추가

router.patch("/checkTodo", ctrl.process.checktodo); //수정
router.patch("/reviseTodo", ctrl.process.revisetodo);

router.delete("/deleteTodo", ctrl.process.deltodo); //수정


module.exports = router;