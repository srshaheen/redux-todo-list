import TaskFrom from "./components/TaskFrom";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 pt-16">Task Manager</h1>
      <TaskFrom />
      <TaskList />
    </div>
  );
}
