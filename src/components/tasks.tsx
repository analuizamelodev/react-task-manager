type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

type TasksProps = {
  tasks: Task[];
  checkTask: (taskId: number) => void;
  detailTask: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
};

function Tasks({ tasks, checkTask, detailTask, deleteTask }: TasksProps) {
  console.log(tasks);

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => checkTask(task.id)}
            className={`bg-slate-400 w-full text-white p-2 rounded-md text-center cursor-pointer transition-colors duration-200 hover:bg-slate-500 active:bg-slate-600 ${task.completed ? "line-through" : ""}`}
          >
            {task.title}
          </button>
          <button
            onClick={() => detailTask(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md cursor-pointer transition-colors duration-200 hover:bg-slate-500 active:bg-slate-600"
          >
            Details
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md cursor-pointer transition-colors duration-200 hover:bg-slate-500 active:bg-slate-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
