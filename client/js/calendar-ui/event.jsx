/**
 * Created by Łukasz Kwasek on 8/5/15.
 */

/**
 * Main background container:
 *
 *     <Event start={int} end={int} groupSize={int} column={int} startHour={int} />
 *
 *     @property start {int} beginning of the event
 *     @property end {int} end of the event
 *     @property groupSize {int} how many columns there are in the group which this event belongs to
 *     @property column {int} index of the column in the group
 *     @property startHour {int} it's the starting hour of the day (0-24, default: 9)
 */
var Event = React.createClass({

    /**
     * Returns a string representing the time in HH:MM format (0-24)
     * @param mins
     * @param startHour
     * @returns {string}
     */
    timeString: function (mins, startHour) {
        var h = Math.floor(mins / 60) + startHour;
        var m = mins % 60;
        return h + ":" + ('0' + m).slice(-2);
    },

    intervalString: function(start, end, startHour) {
        var st = this.timeString(start, startHour);
        var et = this.timeString(end, startHour);
        return st + " - " + et;
    },

    render: function () {

        var start = this.props.start;
        var end = this.props.end;
        var groupSize = this.props.groupSize;
        var column = this.props.column;
        var startHour = this.props.startHour || 9;

        // Generate time
        var time = this.intervalString(start, end, startHour);

        // Generate container style
        var styleFather = {
            "float": "left",
            "marginLeft": ((100 / groupSize) * column) + "%",
            "width": (100 / groupSize) + "%",
            "marginTop": start + "px",
            "height": (end - start) + "px"
        };

        // Generate event style
        var styleChild = {
            "backgroundColor": TmCalendar.Tools.randomLightColor()
        };

        return (
            <div className="calendar-event" style={styleFather}>
                <div className="calendar-event-body" style={styleChild} title={time}>
                    <div className={end - start < 20 ? 'hide' : ''}>
                        <div className="calendar-event-time-container">
                            <span className="calendar-event-time">{time}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});