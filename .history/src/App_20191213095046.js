import React, { Component } from "react";
import Button from "./components/Button";

class App extends Component {
	state = {
		current: "",
		previous: [],
	};

	render() {
		const buttons = [{ symbol: "C", cols: 1 }];
		return (
			<div className='App'>
				<input className='result' type='text' value={this.state.current} />
				<Button />
			</div>
		);
	}
}

export default App;
