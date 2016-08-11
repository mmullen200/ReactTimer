var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
	getInitialState: function () {
		return {
			count: 0,
			// This keeps track of the countdown state
			// Can be started, stoppped, or paused. Default is stopped
			countdownStatus: 'stopped'
		};
	},

	// life cycle method. Gets called every time props or states are updated.
	componentDidUpdate: function (prevProps, prevState) {
		// Because this method will be called every time something updates,
		// like, every time we count down a second, we add this if statement
		// so the method will only be called in certain cases.
		if (this.state.countdownStatus !== prevState.countdownStatus) {
			switch (this.state.countdownStatus) {
				case 'started':
					this.startTimer();
					break;
			}
		}
	},
	startTimer: function () {
		this.timer = setInterval(() => {
			var newCount = this.state.count - 1;
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});
		}, 1000); 
	},

	handleSetCountdown: function (seconds) {
		this.setState({
			count: seconds,
			countdownStatus: 'started'
		});
	},

  render: function () {
  	var {count} = this.state;
    return (
    	<div>
    		<Clock totalSeconds={count}/>
    		<CountdownForm onSetCountdown={this.handleSetCountdown}/>
    	</div>
    	);
  }
});

module.exports = Countdown;