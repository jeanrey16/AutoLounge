import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name:{ FirtstName:'jean', LastName: 'Rey'},
      company: 'ZTM'
    };
    }

  render(){
  return (
    <div className="App">
      <header className='App-header'>
      <p>
        Hi {this.state.name.FirtstName} {this.state.name.LastName}, I work at {this.state.company}</p>
      <button onClick={() =>{this.setState({name: {FirtstName: 'gus', LastName: 'Avila'}});
       }}
       >change Name</button>
      </header>
      </div>
    );
  }
}
export default App;
