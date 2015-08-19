var TmCalendar = (function (module) {

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
    }(TmCalendar || {})
);
