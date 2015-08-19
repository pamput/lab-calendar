/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

var TmCalendar = (function (module) {

        module.Column = function (maxTime) {
            maxTime = maxTime || 540;
            var self = this;

            self.list = [];

            self.isEmpty = function () {
                return self.ending() === -1;
            };

            self.ending = function () {
                var ret;
                if (self.list != null && self.list.length > 0) {
                    ret = self.list[self.list.length - 1].end;
                }

                return ret != null ? ret : -1;
            };

            self.append = function (interval) {
                if (!module.Tools.isValidInterval(interval, maxTime)) {
                    throw "Invalid Interval: " + JSON.stringify(interval);
                }

                if (interval.start >= self.ending() || self.isEmpty()) {
                    self.list.push(interval);
                    return true;
                } else {
                    return false;
                }
            };

            self.size = function () {
                return self.list ? self.list.length : 0;
            }

        };

        return module;
    }(TmCalendar || {})
);