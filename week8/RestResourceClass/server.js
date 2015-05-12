"use strict"

// load the express module
var express = require('express');
// declare our app
var app = express();


// configuration and middleware
app.use(express.static('public'));
//app.set('view engine', 'jade');

// listen for requests
var server = app.listen(1337, function() {
 console.log('Listening on port %d', server.address().port);
});
