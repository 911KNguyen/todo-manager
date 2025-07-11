import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterTabs from "./components/FilterTabs";
import { Task } from "./types/task";
import { loadTasks, saveTasks } from "./utils/storage";
import { Toaster } from "react-hot-toast";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("Tất cả");

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const handleAdd = (task: Task) => setTasks([task, ...tasks]);
  const handleToggle = (id: string) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  const handleDelete = (id: string) => setTasks(tasks.filter((t) => t.id !== id));
  const handleEdit = (id: string, text: string) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, text } : t)));

  const filteredTasks =
    filter === "Tất cả"
      ? tasks
      : tasks.filter((t) => t.completed === (filter === "Đã hoàn thành"));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-xl mx-auto px-4 py-6">
        <Header />
        <TaskForm onAdd={handleAdd} />
        <FilterTabs filter={filter} onChange={setFilter} />
        <TaskList
          tasks={filteredTasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
        <Toaster position="top-right" />
      </div>
    </div>
  );
}

export default App;
