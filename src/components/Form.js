import React from "react";

export default function Form(props) {
  return (
    <div className="form">
        <div>
        <label htmlFor="task-text">Task : </label>
        <input
            type="text"
            id="task-text"
            onChange={(e) => props.handleChange(e)}
            value={props.newTask}
            placeholder="Task..."
        />
      </div>
      <button type="submit" onClick={props.handleSubmit}>
        Add Task
      </button>
    </div>
  );
}
