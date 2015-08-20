/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

var TmCalendar = (function (module) {

        /**
         * This is the main business logic object. It represents the calendar and presents the main methods to invoke.
         * @param maxTime it's the max time in minutes the calendar have to accept (default: 540)
         * @constructor
         */
        module.Calendar = function (maxTime) {
            maxTime = maxTime || 540;
            var self = this;

            /**
             * the events grouped in groups
             * @type {*[]}
             */
            self.groups = [new module.Group(maxTime)];

            /**
             * Appends an interval to the calendar.
             * The interval has to be valid, otherwise an exception will be raised.
             * @param interval the interval in the form {start: int, end: int}
             * @returns {boolean} return true if the insertion goes well, exception otherwise
             */
            self.append = function (interval) {
                if (!module.Tools.isValidInterval(interval, maxTime)) {
                    throw "Invalid Interval: " + JSON.stringify(interval);
                }

                // Try to append the event to any existing group
                var inserted = false;
                var i = 0;
                while (i < self.groups.length && !inserted) {
                    inserted = self.groups[i].append(interval);
                    i++;
                }

                // If was not able to insert, create a new group
                if (!inserted) {
                    var g = new module.Group(maxTime);
                    if (inserted = g.append(interval)) {
                        self.groups.push(g);
                    }
                }

                return inserted;
            };

            /**
             * Appends an array of intervals to the calendar (see append for more details).
             * @param intervals an array of intervals in the form {start: int, end: int}
             */
            self.load = function (intervals) {
                if (intervals == null) {
                    throw "Undefined intervals";
                }

                if (!Array.isArray(intervals)) {
                    throw "Intervals are not an array: " + JSON.stringify(intervals);
                }

                // Sort the array
                // Components like Columns are useless otherwise
                var sorted = intervals.sort(function (e1, e2) {
                    return e1.start - e2.start;
                });

                // Append every interval
                for (var i in sorted) {
                    if (sorted.hasOwnProperty(i)) {
                        self.append(sorted[i]);
                    }
                }
            };

            /**
             * Returns a detailed representation of the calendar
             * @returns {Array} an array of details in the form {start: int, end: int, groupSize: int, column: int}:
             *     - start: beginning of the event
             *     - end: end of the event
             *     - groupSize: how many columns there are in the group which this event belongs to
             *     - column: index of the column in the group
             */
            self.export = function () {
                var ret = [];

                // Get every interval...
                for (var g in self.groups) {
                    var group = self.groups[g];

                    for (var c in group.cols) {
                        var col = group.cols[c];

                        for (var e in col.list) {
                            var event = col.list[e];

                            // ... and push it out
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

            /**
             * Size of the calendar
             * @returns {number} the number of events in the calendar
             */
            self.size = function () {
                var size = 0;

                for (var g in self.groups) {
                    var group = self.groups[g];

                    for (var c in group.cols) {
                        var col = group.cols[c];
                        var list = col.list;

                        if (list != null && Array.isArray(list)) {
                            size = size + list.length;
                        }
                    }
                }

                return size;
            };

            /**
             * Checks if the calendar is empty
             * @returns {boolean}
             */
            self.isEmpty = function() {
                return self.size() === 0;
            };

        };

        return module;
    }(TmCalendar || {})
);