import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

export default function TaskFrom() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    dispatch(
      addTask({
        id: crypto.randomUUID(),
        text: text.trim(),
        completed: false,
      })
    );
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
      <input
        type="text"
        placeholder="Add new task"
        className="p-2 border rounded-md flex-1"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
        Add Task
      </button>
    </form>
  );
}
