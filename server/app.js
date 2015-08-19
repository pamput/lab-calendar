var http = require('http');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/static'));

var server = http.createServer(app);
server.listen(9000, function () {
    console.log("Listening on 9000");
});

module.exports = app;