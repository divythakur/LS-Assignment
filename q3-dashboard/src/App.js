import React, { Component } from 'react';
import AddPeople from './Components/AddPeople'
import Display from './Components/display'
import Left from './Components/let'
import './Components/display.css'
class App extends Component{
  state = {
    people: [
      { id: 101, name: "John", description: "I am a developer", age: 23 },
      { id: 102, name: "George", description: "I am a designer", age: 40},
      { id: 103, name: "Will", description: "I am a web Developer", age: 32},
      { id: 104, name: "Tony Stark", description: "I am Engineer", age: 42},
      { id: 105, name: "Johncena", description: "I am a tester", age: 60},
      { id: 106, name: "Vision", description: "I am a data Scientist", age: 17},




    ],
    available:2
  }

  incrementordecrement=(info)=>{
    var temp=this.state.available;
    if(info===1)
    {
      this.setState({available:temp+1})
    }
    else{
      this.setState({available:temp-1})
    }


  }
  addPerson = (info) => {
    info.id = Math.floor(Math.random() * 100);
    // console.log(info);

    let newInfo = [...this.state.people, info];

    this.setState({
      people: newInfo
    })
  } 

  deletePerson = (id) => {
    let people = this.state.people.filter( (person) => {
      return person.id !== id
    })
    if(document.getElementById(id).checked==true)
    {
      var temp=this.state.available;
      this.setState({available:temp-1})
    }

    this.setState({
      people: people
    })
  }

  componentDidMount(){
    console.log("I am Mounting right now. I happen only once!!")
    document.getElementById(101).checked=true;
    document.getElementById(102).checked=true;
  }
  
  render(){
    return (
          <div className="overlay">
          <div className="App">
            <Left people={this.state.people} available={this.state.available}></Left>
            <Display people={this.state.people} deletePerson={this.deletePerson}   iord={this.incrementordecrement}></Display>
            <AddPeople addPerson={this.addPerson} ></AddPeople>
          </div>
          </div>
        );
      }
    }

export default App;
