// This is the main file of our chat app. It initializes a new 
// express.js instance, requires the config and routes files
// and listens on a port. Start the application by running
// 'node app.js' in your terminal

var path = require('path')
var express = require('express'),
	app = express();

// This is needed if the app is run on heroku:

var port = process.env.PORT || 8180;

// Initialize a new socket.io object. It is bound to 
// the express app, which allows them to coexist.

// app.use(express.static(path.join(__dirname, '../')));

var io = require('socket.io').listen(app.listen(port));

// Require the configuration and the routes files, and pass
// the app and io as arguments to the returned functions.

require('./config')(app, io);
require('./routes')(path, app, io);

console.log('Your application is running on http://localhost:' + port);