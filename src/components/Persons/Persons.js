import React, { Component } from 'react';
import Person from './Person/Person';
import './person.sass';

class persons extends Component {

  getDeviderStateFromProps = (props, state) => {
    console.log('getDeviderStateFromProps');

  }

  shouldComponentUpdate = (nextState, nextProps) => {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate = (prevState, prevProps) => {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate');

  }

  render() {
    console.log('render');

    return (
      <div className="container-main">
        {this.props.persons.map((per, index) => {
          return (
            <Person
              key={index}
              name={per.name}
              lastName={per.lastName}
              age={per.age}
              delete={() => this.props.delete(index)}
              change={(event) => this.props.change(event, index)}
            />
          )
        })}
      </div>
    )
  }
}

export default persons;