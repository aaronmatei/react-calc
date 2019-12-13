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
			{ symbol: "C", cols: 3, action: this.reset },
			{ symbol: "/", cols: 1, action: this.addToCurrent },
			{ symbol: "7", cols: 1, action: this.reset },
			{ symbol: "8", cols: 1, action: this.reset },
			{ symbol: "9", cols: 1, action: this.reset },
			{ symbol: "X", cols: 1, action: this.reset },
			{ symbol: "4", cols: 1, action: this.reset },
			{ symbol: "5", cols: 1, action: this.reset },
			{ symbol: "6", cols: 1, action: this.reset },
			{ symbol: "-", cols: 3, action: this.reset },
			{ symbol: "1", cols: 1, action: this.reset },
			{ symbol: "2", cols: 1, action: this.reset },
			{ symbol: "3", cols: 1, action: this.reset },
			{ symbol: "+", cols: 1, action: this.reset },
			{ symbol: "+-", cols: 1, action: this.reset },
			{ symbol: "0", cols: 1, action: this.reset },
			{ symbol: ".", cols: 1, action: this.reset },
			{ symbol: "=", cols: 1, action: this.reset },
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
