/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

var TmCalendar = (function (module) {

        module.Group = function () {
            var self = this;

            self.cols = [new module.Column()];

            self.ending = function () {
                var ret = -1;
                for (var i in self.cols) {
                    if (self.cols.hasOwnProperty(i)) {
                        var val = self.cols[i].ending();
                        ret = Math.max(ret, val);
                    }
                }

                return ret;
            };

            self.isEmpty = function () {
                return self.ending() === -1;
            };

            self.width = function () {
                return self.cols.length;
            };

            self.append = function (interval) {
                if (
                    module.Tools.isValidInterval(interval) &&
                    (interval.start < self.ending() || self.isEmpty())
                ) {

                    var notInserted = true;
                    var i = 0;
                    while (i < self.cols.length && notInserted) {
                        var res = self.cols[i].append(interval);

                        if (res > -1) {
                            notInserted = false;
                        }

                        i++;
                    }

                    if (notInserted) {
                        var c = new module.Column();
                        c.append(interval);
                        self.cols.push(c);
                    }

                    return self.ending();

                } else {
                    return -1;
                }
            };

        };

        return module;
    }(TmCalendar || {})
);