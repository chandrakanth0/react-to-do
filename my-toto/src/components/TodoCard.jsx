import { CheckCircle, Trash2 } from "lucide-react";

function TodoCard({ todo, toggleDone, deleteTodo }) {
  return (
    <div className="flex items-center w-full max-w-[1800px] justify-between p-3 bg-gray-50 rounded-xl shadow-sm">
      <span
        className={`flex-grow text-black cursor-pointer ${
          todo.done ? "line-through text-gray-400" : ""
        }`}
        onClick={() => toggleDone(todo.id)}
      >
        {todo.task}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => toggleDone(todo.id)}
          className="text-green-500 hover:text-green-600"
        >
          <CheckCircle size={20} />
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
