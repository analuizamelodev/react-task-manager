import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Tasks from "./components/tasks";
import AddTasks from "./components/add-tasks";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "This is the first task",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is the second task",
      completed: false,
    },
    {
      id: 3,
      title: "Task 3",
      description: "This is the third task",
      completed: false,
    },
  ]);

  const addTask = (title: string, description: string) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const detailTask = (taskId: number) => {
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      alert(
        `Title: ${task.title}\nDescription: ${task.description}` +
          "\nCompleted: " +
          task.completed,
      );
    }
  };

  const checkTask = (taskId: number) => {
    if (tasks.find((task) => task.id === taskId)) {
      setTasks(
        tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, completed: !task.completed };
          }
          return task;
        }),
      );
    }
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center flex-col items-center p-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Task Manager</h1>
      </div>
      <div>
        <AddTasks addTask={addTask} />
      </div>
      <br />
      <div>
        <Tasks
          tasks={tasks}
          checkTask={checkTask}
          detailTask={detailTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
