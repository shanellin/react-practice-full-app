import React, { Component } from 'react'
import Introduce from './introduce';

class App extends Component {
  state = {
    introduces: [
      {name:'shanelin', age:'20', belt:'black', id:1},
      {name:'tony stark', age:'20', belt:'black', id:2},
      {name:'captain', age:'20', belt:'black', id:3} 
    ]
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>My first React app</h1>
          <p>Welcome =)</p>
          <Introduce introduces={ this.state.introduces } />
        </header>
      </div>
    );
  }
}

export default App;
