var TmCalendar = (function (module) {

        module.render = function (events, node) {
            React.render(
                <CalendarUI events={events}/>,
                node
            );
        };

        return module;
    }(TmCalendar || {})
);
