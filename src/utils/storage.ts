import { Task } from "../types/task";

const STORAGE_KEY = "todo_tasks";

export const saveTasks = (tasks: Task[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export const loadTasks = (): Task[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};