/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

var TmCalendar = (function (module) {

        module.Tools = {

            /**
             * Checks if the interval is valid.
             * @param interval interval the interval in the form {start: int, end: int}
             * @param maxTime it's the max time in minutes the calendar have to accept (default: 540)
             * @returns {boolean}
             */
            isValidInterval: function (interval, maxTime) {
                maxTime = maxTime || 540;

                return interval != null &&
                    interval.start >= 0 &&
                    interval.end > 0 &&
                    interval.end <= maxTime &&
                    interval.start < interval.end;
            },

            /**
             * Generets a random hash color.
             * @returns {string}
             */
            randomColor: function () {
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            },

            /**
             * Generate a random light hash color
             * @returns {string}
             */
            randomLightColor: function () {
                var letters = '89ABCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 8)];
                }
                return color;
            }

        };

        return module;
    }(TmCalendar || {})
);