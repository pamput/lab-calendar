/**
 * Main calendar container:
 *
 *     <CalendarUI events={arr} maxTime={int} startHour={int}/>
 *
 *     @property events {Array} an array of details in the form {start: int, end: int, groupSize: int, column: int}:
 *     - start: beginning of the event
 *     - end: end of the event
 *     - groupSize: how many columns there are in the group which this event belongs to
 *     - column: index of the column in the group
 *     @property maxTime {int} it's the max time in minutes the calendar have to accept (default: 540)
 *     @property startHour {int} it's the starting hour of the day (0-24, default: 9)
 */
var CalendarUI = React.createClass({

    render: function () {

        var maxTime = this.props.maxTime;
        var startHour = this.props.startHour || 9;
        var hours = Math.floor(maxTime / 60) + 1;

        var calendar = new TmCalendar.Calendar(maxTime);
        calendar.load(this.props.events);

        return (
            <div className="calendar">
                <Background startHour={startHour} hours={hours}/>
                <EventList events={calendar.export()} startHour={startHour}/>
            </div>
        );
    }
});