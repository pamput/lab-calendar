var BackgroundCell = React.createClass({
    render: function () {

        return (
            <div className="background-cell">
                <span>{this.props.text}</span>
            </div>
        );
    }
});