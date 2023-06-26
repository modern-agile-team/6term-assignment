"use strict";

const express = require('express');
const app = express();

//라우팅
const router = require('./src/routes/home');

//앱 views 세팅
app.set("views", './src/views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/public`)); //미들웨어 등록(js파일)

app.use('/', router);   //미들웨어 등록(라우트)

module.exports = app;