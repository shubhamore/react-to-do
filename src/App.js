import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem('tasks'));
    if (items) {
     setTasks(items);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [showForm, setShowForm] = React.useState(true);

  const [newTask, setNewTask] = React.useState("");

  function toggleForm() {
    setShowForm((showForm) => !showForm);
  }

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function handleSubmit() {
    if (!newTask) {
      alert("No Task To Add");
      return;
    }
    let tempTask = [{ task: newTask, id: crypto.randomUUID() }];
    for (let i = 0; i < tasks.length; i++) {
      tempTask.push(tasks[i]);
    }
    setTasks(tempTask);
    setNewTask("");
  }

  function deleteTask(key) {
    setTasks((prev) => prev.filter((i) => i.id !== key));
  }

  return (
    <div className="container">
      <Header toggleForm={toggleForm} showForm={showForm} />
      {showForm && (
        <Form
          handleChange={handleChange}
          newTask={newTask}
          handleSubmit={handleSubmit}
        />
      )}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      ) : (
        <h4 className="task" style={{margin:"15px auto",justifyContent:"center"}} >NO TASKS TO SHOW</h4>
      )}
      <Footer />
    </div>
  );
}

export default App;
