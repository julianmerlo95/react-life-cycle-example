import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import { persons } from "../components/utils/arrayPerson";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("CONSTRUCTOR");
  }
  state = {
    persons: persons,
    toggle: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return state;
  }

  componentDidMount = () => {
    console.log("componentDidMount");
  };

  showPersonHandler = () => {
    const newToggle = this.state.toggle;
    this.setState({ toggle: !newToggle });
  };

  deletePersonHandler = (indexPerson) => {
    const newArrayPerson = [...this.state.persons];
    newArrayPerson.splice(indexPerson, 1);
    this.setState({ persons: newArrayPerson });
  };

  changePersonHandler = (event, indexPerson) => {
    const newName = event.target.value;
    const newArrayPerson = [...this.state.persons];
    newArrayPerson[indexPerson].name = newName;
    this.setState({ persons: newArrayPerson });
  };

  render() {
    console.log("RENDER");

    let person = null;

    if (this.state.toggle) {
      person = (
          <Persons
            persons={this.state.persons}
            delete={this.deletePersonHandler}
            change={this.changePersonHandler}
          />
      );
    }

    return (
      <>
        <Cockpit clicked={this.showPersonHandler} />
        {person}
      </>
    );
  }
}

export default App;
