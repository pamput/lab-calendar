/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

var TmCalendar = (function (module) {

        module.Calendar = function (maxTime) {
            maxTime = maxTime || 540;
            var self = this;

            self.groups = [new module.Group(maxTime)];

            self.append = function (interval) {
                if (!module.Tools.isValidInterval(interval, maxTime)) {
                    throw "Invalid Interval: " + JSON.stringify(interval);
                }

                var notInserted = true;
                var i = 0;
                while (i < self.groups.length && notInserted) {
                    var res = self.groups[i].append(interval);

                    if (res > -1) {
                        notInserted = false;
                    }

                    i++;
                }

                if (notInserted) {
                    var g = new module.Group(maxTime);
                    g.append(interval);
                    self.groups.push(g);
                }
            };

            self.load = function (intervals) {
                if (intervals == null) {
                    throw "Undefined intervals";
                }

                if (!Array.isArray(intervals)) {
                    throw "Intervals are not an array: " + JSON.stringify(intervals);
                }

                var sorted = intervals.sort(function (e1, e2) {
                    return e1.start - e2.start;
                });

                for (var i in sorted) {
                    if (sorted.hasOwnProperty(i)) {
                        self.append(sorted[i]);
                    }
                }
            };

            self.export = function () {
                var ret = [];

                for (var g in self.groups) {
                    var group = self.groups[g];

                    for (var c in group.cols) {
                        var col = group.cols[c];

                        for (var e in col.list) {
                            var event = col.list[e];

                            ret.push({
                                start: event.start,
                                end: event.end,
                                groupSize: group.cols.length,
                                column: c
                            });
                        }
                    }
                }

                return ret;
            };

        };

        return module;
    }(TmCalendar || {})
);