import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {name:"Joe" , age:23},
      {name:"Katy" , age:29},
      {name:"Jin" , age:32},
      {name:"Nek" , age:36}
    ]
  }
  render(){
    return (
      <div className="App">
        <h1> Hi, I'm react app</h1>
        <p>This is really working ..!</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> My hobbies : Cycling, racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );
  }
  
}

export default App;
