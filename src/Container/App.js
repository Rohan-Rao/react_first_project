import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../Components/Cockpit/cockpit';
import Persons from '../Components/Persons/Persons';
import Auxiliary from './../hoc/Auxiliary';
import withClass from './../hoc/withClass';

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    const index =  persons.find(p => {
      return p.id === personIndex;
    });
    console.log(index);
    persons.splice( index, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render () {
    let persons = null;
    let btnClass = '';
    console.log(this.props);
    if ( this.state.showPersons ) {
      persons = (
        <Persons 
          persons={this.state.persons}
          click = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
        ></Persons>
      );

      btnClass = classes.Red;
    }

    return (
    <div>
        <Cockpit 
          appTitle = {this.props.appTitle}
          btnClass={btnClass} 
          length={this.state.persons.length}
          click={() => this.togglePersonsHandler()}
          >
        </Cockpit>
        {persons}
    </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App,classes.App);
