import React, { Component } from 'react'
import Introduce from './introduce';
import AddIntroduce from './AddIntroduce';
import './app.css';

class App extends Component {
  state = {
    introduces: [
      {name:'shanelin', age:'25', belt:'black', id:1},
      {name:'tony stark', age:'20', belt:'black', id:2},
      {name:'captain', age:'22', belt:'black', id:3} 
    ]
  }
  addIntroduce = (cb) => {
    cb.id = Math.random();
    let introduces = [...this.state.introduces, cb];
    this.setState({
      introduces: introduces
    })
  }
  deleteIntroduce = (id) => {
    console.log(id);
    let introduces = this.state.introduces.filter((item, index) => {
      return item.id !== id
    })
    this.setState({
      introduces: introduces 
    })
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate');
    console.log(prevProps, prevState);
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>My first React app</h1>
          <p>Welcome =)</p>
          <Introduce deleteIntroduce={ this.deleteIntroduce } introduces={ this.state.introduces } />
          <AddIntroduce addIntroduce={ this.addIntroduce } />
        </header>
      </div>
    );
  }
}

export default App;
