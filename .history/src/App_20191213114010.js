import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";
import "./css/styles.css";

class App extends Component {
	state = {
		current: "",
		previous: [],
	};

	reset = () => {
		this.setState({ current: "0" });
	};
	addToCurrent = symbol => {
		if (["/", "-", "+", "X"].indexOf(symbol) > -1) {
			let { previous } = this.state;
			previous.push(this.state.current + symbol);
			this.setState({ previous, nextIsReset: true });
		} else {
			if ((this.state.current === "0" && symbol !== ".") || this.state.nextIsReset) {
				this.setState({ current: symbol, nextIsReset: false });
			} else {
				this.setState({ current: this.state.current + symbol });
			}
		}
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
			{ symbol: "-", cols: 1, action: this.addToCurrent },
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
				{this.state.previous ? (
					<div className='floaty-last'>{this.state.previous[this.state.previous.length - 1]}</div>
				) : null}
				<input className='result' type='text' value={this.state.current} onChange={null} />

				{buttons.map((btn, idx) => {
					return (
						<Button key={idx} symbol={btn.symbol} cols={btn.cols} action={symbol => btn.action(symbol)} />
					);
				})}
			</div>
		);
	}
}

export default App;
