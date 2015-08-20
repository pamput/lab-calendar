/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

var TmCalendar = (function (module) {

        /**
         * This object represents a column of events on the calendar. A column is defined as a list of graphically
         * consecutive events of the same width. Every event present in a column is NOT overlapping.
         * @param maxTime it's the max time in minutes the calendar have to accept (default: 540)
         * @constructor
         */
        module.Column = function (maxTime) {
            maxTime = maxTime || 540;
            var self = this;

            /**
             * List of consecutive not overlapping events.
             * @type {Array}
             */
            self.list = [];

            /**
             * Checks if the column is empty
             * @returns {boolean}
             */
            self.isEmpty = function () {
                return self.ending() === -1;
            };

            /**
             * Returns the end time of the last event present in the column.
             * @returns int
             */
            self.ending = function () {
                var ret;
                if (self.list != null && self.list.length > 0) {
                    ret = self.list[self.list.length - 1].end;
                }

                return ret != null ? ret : -1;
            };

            /**
             * Appends an interval to the column. The interval cannot start before the end of the oldest interval in
             * the column, if it does the interval is considered wrong and false is returned.
             * The interval has to be valid, otherwise an exception will be raised.
             * @param interval the interval in the form {start: int, end: int}
             * @returns {boolean} return true if the insertion goes well, false if the interval is overlapping the last
             * event.
             */
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