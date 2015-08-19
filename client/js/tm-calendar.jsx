/**
 * This is the main entry point for the widget
 */
var TmCalendar = (function (module, $) {

        /**
         * Renders the calendar
         * @param events array of events in the form {start: int, end: int}
         * @param node DOM node where to render the calendar
         * @param options optional options:
         *     - maxTime: it's the max time in minutes the calendar have to accept (default: 540)
         *     - startHour: it's the starting hour of the day (0-24, default: 9)
         * Hours after midnight are not handled and should be avoided.
         */
        module.render = function (events, node, options) {
            if (!node || !events) {
                return;
            }

            var opt = {
                maxTime: 540,
                startHour: 9
            };

            $.extend(opt, options);

            React.render(
                <CalendarUI events={events} maxTime={opt.maxTime} startHour={opt.startHour}/>,
                node
            );
        };

        return module;
    }(TmCalendar || {}, jQuery)
);
