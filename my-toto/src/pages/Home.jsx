import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoCard from "../components/TodoCard";

function Home() {
  const [todos, setTodos] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(stored);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task, done: false }]);
  };

  const toggleDone = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-16 m-15 max-w2xl">
      <h1 className="text-2xl font-bold mb-4 text-green text-center">To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="mt-4 grid gap-3">
        {todos.length === 0 ? (
          <p className="text-gray-500 text-black text-center">No tasks yet ✨</p>
        ) : (
          todos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              toggleDone={toggleDone}
              deleteTodo={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
