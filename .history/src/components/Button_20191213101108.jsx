import React, { Component } from "react";

class Button extends Component {
	render() {
		return (
			<div>
				<button className='calc-button' onChange={this.props.action}>
					{this.props.symbol}
				</button>
			</div>
		);
	}
}

export default Button;
