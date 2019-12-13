import React, {Component} from "react";

class App extends Component{
  state = {
    current:'',
    previous:[]
  };
	return (
		<div className='App'>
			<input type='text' value={this.state.current} />
		</div>
	);
}

export default App;
