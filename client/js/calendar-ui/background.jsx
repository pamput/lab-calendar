/**
 * Created by Łukasz Kwasek on 8/19/15.
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