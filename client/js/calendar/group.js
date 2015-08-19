/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

var TmCalendar = (function (module) {

        module.Group = function (maxTime) {
            maxTime = maxTime || 540;
            var self = this;

            self.cols = [new module.Column(maxTime)];

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
                if (!module.Tools.isValidInterval(interval, maxTime)) {
                    throw "Invalid Interval: " + JSON.stringify(interval);
                }

                if (interval.start < self.ending() || self.isEmpty()) {

                    var inserted = false;
                    var i = 0;
                    while (i < self.cols.length && !inserted) {
                        inserted = self.cols[i].append(interval);
                        i++;
                    }

                    if (!inserted) {
                        var c = new module.Column(maxTime);
                        if (inserted = c.append(interval)) {
                            self.cols.push(c);
                        }
                    }

                    return inserted;

                } else {
                    return false;
                }
            };

            self.size = function () {
                var size = 0;

                for (var c in self.cols) {
                    size += self.cols[c].size();
                }

                return size;
            };

            self.width = function () {
                return self.cols ? self.cols.length : 0;
            }

        };

        return module;
    }(TmCalendar || {})
);