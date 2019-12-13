import React, { Component } from "react";
import Button from "./components/Button";

class App extends Component {
	state = {
		current: "0",
		previous: [],
	};

	reset = () => {
		this.setState({ result: "0" });
	};

	render() {
		const buttons = [
			{ symbol: "C", cols: 1, action: this.reset },
			{ symbol: "C", cols: 1, action: this.reset },
			{ symbol: "C", cols: 1, action: this.reset },
			{ symbol: "C", cols: 1, action: this.reset },
			{ symbol: "C", cols: 1, action: this.reset },
			{ symbol: "C", cols: 1, action: this.reset },
			{ symbol: "C", cols: 1, action: this.reset },
			{ symbol: "C", cols: 1, action: this.reset },
			{ symbol: "C", cols: 1, action: this.reset },
		];
		return (
			<div className='App'>
				<input className='result' type='text' value={this.state.current} />
				<Button />
			</div>
		);
	}
}

export default App;
