/**
 * Created by Łukasz Kwasek on 8/6/15.
 */

module.exports = {
    respondeJsonError: function (res, err, code) {
        code = code || 500;

        var msg = JSON.stringify({
            code: code,
            message: err.message
        });

        res.header("content-type", "application/json");
        res.status(500).send(msg);
    },

    respondeJson: function (res) {
        res.header("content-type", "application/json");
    }
};