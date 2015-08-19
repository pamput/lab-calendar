/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

var TmCalendar = (function (module) {

        module.Tools = {

            isValidInterval: function (interval) {
                return interval != null &&
                    interval.start > 0 &&
                    interval.end > 0 &&
                    interval.start < interval.end;
            },

            randomColor: function () {
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

        };

        return module;
    }(TmCalendar || {})
);