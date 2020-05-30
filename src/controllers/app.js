var express = require('express');
var app = express();
var server = require('http').Server(app);


   
module.exports = {app: app, server: server,express: express};