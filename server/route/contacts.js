var client = require('../utils/redis-client');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var routerUtils = require('../utils/router-utils');
var async = require('async');

var jsonParser = bodyParser.json();
var urlEncoder = bodyParser.urlencoded({
    extended: true
});

router.get("/", function (req, res) {
    client.keys("contact:*", function (err, contacts) {
        if (err) {
            console.log(err);
            return routerUtils.respondeJsonError(res, err);
        }

        res.header("content-type", "application/json");
        res.status(200);
        res.send(JSON.stringify(contacts));
        res.end();
    });
});

router.get("/full", function (req, res) {
    client.keys("contact:*", function (err, contacts) {
        if (err) {
            console.log(err);
            return routerUtils.respondeJsonError(res, err);
        }

        async.map(contacts,
            function (contact, callback) {
                client.hgetall(contact, function (err, data) {
                    callback(err, data);
                })
            },
            function (err, infos) {
                var ret = {};

                for (var i in contacts) {
                    if (contacts.hasOwnProperty(i)) {
                        ret[contacts[i].replace("contact:", "")] = infos[i];
                    }
                }

                res.header("content-type", "application/json");
                res.status(200);
                res.send(JSON.stringify(ret));
                res.end();
            });
    });
});

router.get("/:id", function (req, res) {
    client.hgetall("contact:" + req.params.id, function (err, contact) {
        if (err) {
            console.log(err);
            return routerUtils.respondeJsonError(res, err);
        }

        res.header("content-type", "application/json");
        res.status(200);
        res.send(JSON.stringify(contact));
        res.end();
    });
});

router.post("/:id", jsonParser, function (req, res) {
    client.hmset("contact:" + req.params.id, req.body, function (err) {
        if (err) {
            console.log(err);
            return routerUtils.respondeJsonError(res, err);
        }

        res.header("content-type", "application/json");
        res.status(200);
        res.end();
    });
});

router.delete("/:id", function (req, res) {
    var key = "contact:" + req.params.id;

    client.hkeys(key, function (err, fields) {
        if (err) {
            console.log(err);
            return routerUtils.respondeJsonError(res, err);
        }

        var args = [key];
        args = args.concat(fields);

        client.hdel(args, function (err) {
            if (err) {
                console.log(err);
                return routerUtils.respondeJsonError(res, err);
            }

            res.header("content-type", "application/json");
            res.status(200);
            res.end();
        });
    });
});

module.exports = router;