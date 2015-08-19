/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

var TmCalendar = (function (module) {

        module.Column = function () {
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
                if (module.Tools.isValidInterval(interval) &&
                    (interval.start >= self.ending() || self.isEmpty())) {
                    self.list.push(interval);
                    return self.ending();
                } else {
                    return -1;
                }
            };

        };

        return module;
    }(TmCalendar || {})
);