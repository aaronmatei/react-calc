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
	addToCurrent = symbol => {
		this.setState({ current: this.state.current + symbol });
	};

	render() {
		const buttons = [
			{ symbol: "C", cols: 3, action: this.reset },
			{ symbol: "/", cols: 1, action: this.addToCurrent },
			{ symbol: "7", cols: 1, action: this.addToCurrent },
			{ symbol: "8", cols: 1, action: this.addToCurrent },
			{ symbol: "9", cols: 1, action: this.addToCurrent },
			{ symbol: "X", cols: 1, action: this.addToCurrent },
			{ symbol: "4", cols: 1, action: this.addToCurrent },
			{ symbol: "5", cols: 1, action: this.addToCurrent },
			{ symbol: "6", cols: 1, action: this.addToCurrent },
			{ symbol: "-", cols: 3, action: this.addToCurrent },
			{ symbol: "1", cols: 1, action: this.addToCurrent },
			{ symbol: "2", cols: 1, action: this.addToCurrent },
			{ symbol: "3", cols: 1, action: this.addToCurrent },
			{ symbol: "+", cols: 1, action: this.addToCurrent },
			{ symbol: "+-", cols: 1, action: this.addToCurrent },
			{ symbol: "0", cols: 1, action: this.addToCurrent },
			{ symbol: ".", cols: 1, action: this.addToCurrent },
			{ symbol: "=", cols: 1, action: this.addToCurrent },
		];
		return (
			<div className='App'>
				<input className='result' type='text' value={this.state.current} onChange={null} />

				{buttons.map((btn, idx) => {
					return <Button key={idx} symbol={btn.symbol} cols={btn.cols} action={symbol => btn.action} />;
				})}
			</div>
		);
	}
}

export default App;
