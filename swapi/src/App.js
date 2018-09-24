import React, { Component } from 'react';
import Selection from './Selection';
import Display from './Display';

class App extends Component {
	render() {
		return (
			<div className="tc">
				<h1 className="f1">Let the Force be in You</h1>
				<Selection />
				<Display />
			</div>
		);
	}
}

export default App;