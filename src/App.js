import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      Monsters: [],
    };
    }

    componentDidMount(){
      fetch('https//https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
         this.setState(
          () => {
        return {monsters: users};
      },
      () => {
        console.log(this.state);
      }
    )
  );
}

  render(){
  return(
  <div className="App">
    {this.state.Monsters.map((monster) => {
    return (
      <div key={monster.id}>
        <h1>{monster.name}</h1>
      </div>
    );
    })}
  </div>
  );
}
}
export default App;
