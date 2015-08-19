/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

/**
 * Main background container:
 *
 *     <Background hours={int} startHour={int}/>
 *
 *     @property hours {int} how many hours the background has to show (default: 9)
 *     @property startHour {int} it's the starting hour of the day (0-24, default: 9)
 */
var Background = React.createClass({
    render: function () {

        var startHour = this.props.startHour;
        var hours = this.props.hours;

        var cells = [];

        for (var h = startHour; h <= startHour + hours; h++) {
            var text = h + ":00";
            cells.push(
                <BackgroundCell text={text}/>
            );
        }

        return (
            <div className="background">
                {cells}
            </div>
        );
    }
});