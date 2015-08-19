var CalendarUI = React.createClass({

    render: function () {

        var calendar = new TmCalendar.Calendar();
        calendar.load(this.props.events);

        return (
            <div className="calendar">
                <EventList events={calendar.export()}/>
            </div>
        );
    }
});