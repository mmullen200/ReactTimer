var React = require('react');

var Controls = React.createClass({
	propTypes: {
		// The countdown status needs to be passed down to this component so
		// the buttons can be dynamically generated.
		countdownStatus: React.PropTypes.string.isRequired
	},
	render: function () {
		var {countdownStatus} = this.props;

		// This function will render the proper button depending on the status of
		// countdownStatus
		var renderStartStopButton = () => {
			if (countdownStatus === 'started') {
				return <button className="button secondary">Pause</button>
			} else if (countdownStatus === 'paused') {
				return <button className="button primary">Start</button>
			}
		};

		return (
			<div className="controls">
				{renderStartStopButton()}
				<button className="button alert hollow">Clear</button>
			</div>
			)
	}

});

module.exports = Controls;