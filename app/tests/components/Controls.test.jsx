var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
	it('should exist', () => {
		expect(Controls).toExist();
	});

	describe('render', () => {
		it('shoulder render pause when started', () => {
			// Here, we render the Controls component and pass down a prop,
			// countdownStatus
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
			// This will asert the output that is rendered to the screen????
			// Passes in the component, controls, whose DOM node we want to find
			var $el = $(ReactDOM.findDOMNode(controls));
			// Here, we search for the button that contains Pause.
			// It should be showing up.
			// .find queries the DOM, and :contains is a special jQuery filter.
			var $pauseButton = $el.find('button:contains(Pause)');

			// There are three buttons in the component, and we are looking
			// for a case where exacly one of them is set to pause
			expect($pauseButton.length).toBe(1);
		});

		it('shoulder render start when paused', () => {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $startButton = $el.find('button:contains(Start)');
			expect($startButton.length).toBe(1);
		});
	});
});