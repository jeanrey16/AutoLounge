import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name:{ FirtstName:'jean', LastName: 'Rey'},
      company: 'hyros INC'
    };
    }

  render(){
  return <div className="App"></div>;
  }
}
export default App;
