import React from "react";

const cockpit = (props) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "15px" }}>
      <h2>
        This is a simple Application. Shows the different states in classes. <br/> ¡¡View console!!
      </h2>
      <button style={{ cursor: "pointer" }} onClick={props.clicked}>
        Show Peopple
      </button>
    </div>
  );
};

export default cockpit;
