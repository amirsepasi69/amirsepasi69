var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sgRouter = require('./routes/studygroups');
var sgRouter = require('./routes/studygroups');
var courseRouter = require('./routes/courses');
var studentRouter = require('./routes/students');
var groupAdminRouter = require('./routes/group-admins');
var generalAdminRouter = require('./routes/general-admins');
var meetingRouter = require('./routes/meetings');
var debug = require('debug')('server:server');
var http = require('http');
var cors = require("cors");

var server = express();
server.use(cors());

// view engine setup
// server.set('views', path.join(__dirname, 'views'));
// server.set('view engine', 'jade');

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', indexRouter);
server.use('/users', usersRouter);
server.use('/studygroups', sgRouter);
server.use('/courses', courseRouter);
server.use('/students', studentRouter);
server.use('/groupadmins', groupAdminRouter);
server.use('/generaladmins', generalAdminRouter);
server.use('/meetings', meetingRouter);



// catch 404 and forward to error handler
server.use(function(req, res, next) {
  next(createError(404));
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});


//www starts here

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3001');
server.set('port', port);

/**
 * Create HTTP server.
 */

var server2 = http.createServer(server);

/**
 * Listen on provided port, on all network interfaces.
 */

server2.listen(port);
server2.on('error', onError);
server2.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server2.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}



module.exports = server;
