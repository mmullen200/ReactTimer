var React = require('react');

var Controls = React.createClass({
	propTypes: {
		// The countdown status needs to be passed down to this component so
		// the buttons can be dynamically generated.
		countdownStatus: React.PropTypes.string.isRequired,
		onStatusChange: React.PropTypes.func.isRequired
	},
	
	// We'll create an onclick function that takes care of all the buttons
	// instead of creating one for each button.
	onStatusChange: function (newStatus) {
		return () => {
			this.props.onStatusChange(newStatus);
		}
	},
	
	render: function () {
		var {countdownStatus} = this.props;

		// This function will render the proper button depending on the status of
		// countdownStatus
		var renderStartStopButton = () => {
			if (countdownStatus === 'started') {
				return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
			} else if (countdownStatus === 'paused') {
				return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
			}
		};

		return (
			<div className="controls">
				{renderStartStopButton()}
				
				<button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
			</div>
			)
	}

});

module.exports = Controls;