var CalendarUI = React.createClass({

    render: function () {

        var maxTime = this.props.maxTime;
        var startHour = this.props.startHour;
        var hours = Math.floor(maxTime / 60) + 1;

        var calendar = new TmCalendar.Calendar(maxTime);
        calendar.load(this.props.events);

        return (
            <div className="calendar">
                <Background startHour={startHour} hours={hours}/>
                <EventList events={calendar.export()}/>
            </div>
        );
    }
});