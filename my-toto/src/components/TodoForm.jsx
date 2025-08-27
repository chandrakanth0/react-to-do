import { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTodo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter new task..."
        className="flex-grow px-3 py-2 text-black border rounded-xl focus:outline-none focus:ring focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-500 rounded-xl shadow hover:bg-indigo-600"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
