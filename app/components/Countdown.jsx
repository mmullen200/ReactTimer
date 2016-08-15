var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

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
				case 'stopped':

					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},

	

	componentWillUnmount: function() {
	      clearInterval(this.timer);
	      this.timer = undefined;
	},
	startTimer: function () {
		this.timer = setInterval(() => {
			var newCount = this.state.count - 1;
			this.setState({
				count: newCount >= 0 ? newCount : 0
			});

			if (newCount === 0) {
				this.setState({countdownStatus: 'stopped'});
			}

		}, 1000); 
	},

	handleSetCountdown: function (seconds) {
		this.setState({
			count: seconds,
			countdownStatus: 'started'
		});
	},

	handleStatusChange: function (newStatus) {
		this.setState({countdownStatus: newStatus});
	},

  render: function () {
  	var {count, countdownStatus} = this.state;
  	var renderControlArea = () => {
  		if (countdownStatus !== 'stopped') {
  			return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
  		} else {
  			return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
  		}
  	};

    return (
    	<div>
    		<h1 className="page-title">Countdown App</h1>
    		<Clock totalSeconds={count}/>
    		{renderControlArea()}
    	</div>
    	);
  }
});

module.exports = Countdown;