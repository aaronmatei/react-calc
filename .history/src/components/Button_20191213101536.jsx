import React, { Component } from "react";

class Button extends Component {
	render() {
		return (
			<div className>
				<button className='calc-button' onClick={e => this.props.action(this.props.symbol)}>
					{this.props.symbol}
				</button>
			</div>
		);
	}
}

export default Button;
