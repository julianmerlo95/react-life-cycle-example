import React from "react";
import "./person.sass";

const person = (props) => {
  return (
    <div className="person">
      <div className="person__card">
        <h1>Name: {props.name}</h1>
        <h2>Lastname: {props.lastName}</h2>
        <p>Age: {props.age}</p>
        <input onChange={props.change} placeholder="Change name here!"></input>
        <button onClick={props.delete}>Delete person</button>
      </div>
    </div>
  );
};

export default person;
