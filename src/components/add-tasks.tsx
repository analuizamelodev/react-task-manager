type AddTasksProps = {
  addTask: (title: string, description: string) => void;
};

function AddTasks({ addTask }: AddTasksProps) {
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <h1 className="text-2xl text-center font-bold mb-4 text-slate-800 ">
        Add Task
      </h1>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();

          const form = e.currentTarget;

          const titleInput = form.elements.namedItem(
            "title",
          ) as HTMLInputElement;
          const descriptionInput = form.elements.namedItem(
            "description",
          ) as HTMLInputElement;

          const title = titleInput.value;
          const description = descriptionInput.value;

          addTask(title, description);
          form.reset();
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="p-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          className="p-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
          required
        />

        <button
          type="submit"
          className="bg-slate-700 text-white py-2 rounded-lg hover:bg-slate-800 transition-colors"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTasks;
