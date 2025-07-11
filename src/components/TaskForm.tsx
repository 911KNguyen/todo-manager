import { useState } from "react";
import { Task } from "../types/task";
import { toast } from "react-hot-toast";

interface Props {
    onAdd: (task: Task) => void;
}

export default function TaskForm({ onAdd }: Props) {
    const [text, setText] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text.trim()) return;

        const newTask: Task = {
            id: crypto.randomUUID(),
            text,
            completed: false,
        };

        onAdd(newTask);
        toast.success("Đã thêm nhiệm vụ!");
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 border border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-800 dark:text-white"
                placeholder="Nhập nhiệm vụ..."
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Thêm
            </button>
        </form>
    );
}