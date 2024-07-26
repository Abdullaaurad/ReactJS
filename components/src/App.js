import React, {Component} from 'react'
import './App.css';
import Greet from './Component/greet'
import Welcome from './Component/Welcome'
import Hello from './Component/Hello'
import Another from './Component/another'
import Why from './Component/why'

class App extends Component{
  render(){
    return (
      <div className="App">
        <Greet />
        <Welcome />
        <Hello />
        <Another />
        <Why />
      </div>
    )
  }
}

export default App;
