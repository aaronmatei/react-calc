import React, {Component} from "react";

class App extends Component{
  state = {};
	return (
		<div className='App'>
			<input type='text' value={this.state.current} />
		</div>
	);
}

export default App;
