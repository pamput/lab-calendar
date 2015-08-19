/**
 * Created by Łukasz Kwasek on 8/5/15.
 */

/**
 * Main background container:
 *
 *     <Event start={int} end={int} groupSize={int} column={int} />
 *
 *     @property start {int} beginning of the event
 *     @property end {int} end of the event
 *     @property groupSize {int} how many columns there are in the group which this event belongs to
 *     @property column {int} index of the column in the group
 */
var Event = React.createClass({
    render: function () {

        var start = this.props.start;
        var stop = this.props.end;
        var groupSize = this.props.groupSize;
        var column = this.props.column;

        var styleFather = {
            "float": "left",
            "marginLeft": ((100 / groupSize) * column) + "%",
            "width": (100 / groupSize) + "%",
            "marginTop": start + "px",
            "height": (stop - start) + "px"
        };

        var styleChild = {
            "backgroundColor": TmCalendar.Tools.randomColor()
        };

        return (
            <div className="calendar-event" style={styleFather}>
                <div className="calendar-event-body" style={styleChild} />
            </div>
        );
    }
});