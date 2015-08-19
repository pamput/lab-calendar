/**
 * Created by Łukasz Kwasek on 8/19/15.
 */

var EventList = React.createClass({
    render: function () {

        var eventList = [];

        if (this.props.events) {
            eventList = this.props.events.map(function (e) {
                return (
                    <Event start={e.start} end={e.end} groupSize={e.groupSize} column={e.column}/>
                );
            });
        }

        return (
            <div>
                {eventList}
            </div>
        );
    }
});