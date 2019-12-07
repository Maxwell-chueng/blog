const {
  fileDir,
  uploadDir,
  keys,
  renderDir
} = require("./config");
const multer = require("multer");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const artTemplate = require("express-art-template");
const frontRouter = require('./routes/front/frontRouter');
const backRouter = require('./routes/back/backRouter');

var app = express();

// 文件上传
app.use(multer({
  dest: uploadDir
}).any());

// 跨域
app.use("*",(req,res,next)=>{
	res.setHeader('Access-Control-Allow-Origin','*');
	next();
})


// view engine setup
/*app.set("views", renderDir);
app.engine("html", artTemplate);
app.set("view engine", "html");*/
app.use(express.static(fileDir));
app.use(express.static(uploadDir));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', frontRouter);
app.use('/api/back', backRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
