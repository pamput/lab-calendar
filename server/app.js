var http = require('http');
var express = require('express');
var main = require('./route/main');
var contacts = require('./route/contacts');

var app = express();
app.use("/", main);
app.use("/contacts", contacts);

app.use(express.static(__dirname + '/static'));

var server = http.createServer(app);
server.listen(9000, function () {
    console.log("Listening on 9000");
});

module.exports = app;