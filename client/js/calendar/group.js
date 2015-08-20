/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

var TmCalendar = (function (module) {

        /**
         * This object represents a group of columns. Every event in a group is overlapping to one or more other events.
         * @param maxTime it's the max time in minutes the calendar have to accept (default: 540)
         * @constructor
         */
        module.Group = function (maxTime) {
            maxTime = maxTime || 540;
            var self = this;

            /**
             * Columns contained in a group
             * @type {*[]}
             */
            self.cols = [new module.Column(maxTime)];

            /**
             * This method returns the max end time in the group.
             * @returns {number}
             */
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

            /**
             * Checks if the group is empty
             * @returns {boolean}
             */
            self.isEmpty = function () {
                return self.ending() === -1;
            };

            /**
             * Returns the with of the group. The width is defined as the number of columns contained in the group.
             * @returns {Number}
             */
            self.width = function () {
                return self.cols.length;
            };

            /**
             * Appends an interval to the group. The interval will be appended at the first suitable column. If no suitable
             * columns are found, a new column is added. A suitable column is defined as a column which ending is not
             * greater then the start of the event. Eventual holes in the column suitable for the event are not taken
             * in consideration.
             * @param interval interval the interval in the form {start: int, end: int}
             * @returns {boolean}
             */
            self.append = function (interval) {
                if (!module.Tools.isValidInterval(interval, maxTime)) {
                    throw "Invalid Interval: " + JSON.stringify(interval);
                }

                if (interval.start < self.ending() || self.isEmpty()) {

                    // Try to append the event to any existing column
                    var inserted = false;
                    var i = 0;
                    while (i < self.cols.length && !inserted) {
                        inserted = self.cols[i].append(interval);
                        i++;
                    }

                    // If was not able to insert, create a new column
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

            /**
             * Size of the group
             * @returns {number} the number of events in the group
             */
            self.size = function () {
                var size = 0;

                for (var c in self.cols) {
                    size += self.cols[c].size();
                }

                return size;
            };

            /**
             * Returns the width of the group. The width of the group is defined as the number of columns in it.
             * @returns {int}
             */
            self.width = function () {
                return self.cols ? self.cols.length : 0;
            }

        };

        return module;
    }(TmCalendar || {})
);