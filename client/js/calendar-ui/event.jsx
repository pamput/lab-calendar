/**
 * Created by Łukasz Kwasek on 8/5/15.
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