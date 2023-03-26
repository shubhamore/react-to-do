import React from "react";

export default function Header(props) {
  const styles = {
    backgroundColor: props.showForm ? "#f46b6b" : "#5df15d",
  };
  return (
    <header>
      <h1>To-Do App</h1>
      <button onClick={props.toggleForm} style={styles}>
        {props.showForm ? "Close" : "Add"}
      </button>
    </header>
  );
}
