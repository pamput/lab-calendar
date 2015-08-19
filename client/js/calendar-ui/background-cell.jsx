/**
 * A line in the background:
 *
 *     <BackgroundCell text={string}/>
 *
 *     @property text {strint} string shown at the beginning of the line
 */
var BackgroundCell = React.createClass({
    render: function () {

        return (
            <div className="background-cell">
                <span>{this.props.text}</span>
            </div>
        );
    }
});