import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
      setNewTask("");
    }
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>   {//id, text, done
        if (task.id === id) {
          return { ...task, done: !task.done };
        } else {
          return task;
        }
      }) 
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Abi's To Do List</h1>
      <br />
      <div className="header">
        <input
          type="text"
          placeholder="Enter new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-row">
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span
                style={{ textDecoration: task.done ? "line-through" : "none" }}
              >
                {task.text}
              </span>
              <div className="buttons">
                <button onClick={() => toggleDone(task.id)} id="done">
                  Done
                </button>
                <button onClick={() => deleteTask(task.id)} id="delete">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
