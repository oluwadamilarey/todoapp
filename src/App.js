import React, { Component } from 'react';
import Ninjas from './ninjas';
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas : [
      {name: 'david', age: 45, belt: 'black', id: 1},
      {name: 'sewa', age: 35, belt: 'blue', id: 2},
      {name: 'juwon', age: 19, belt: 'pink', id: 3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let newNinjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: newNinjas
    })
  }
  deleteNinja = (id) => {
    let newNinjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas: newNinjas
    })
  }
  render(){
    return (
      <div className="App">
        <Ninjas deleteNinja={this.deleteNinja} ninjas = {this.state.ninjas}/>
        <AddNinja addNinja= {this.addNinja} /> 
      </div>
    );
  }
 
}

export default App;
