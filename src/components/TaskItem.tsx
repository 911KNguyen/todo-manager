import { Task } from "../types/task";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { Trash2, Pencil, Save } from "lucide-react";

interface Props {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newText: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete, onEdit }: Props) {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(task.text);

    const handleEdit = () => {
        if (!text.trim()) return toast.error("Mô tả không được trống");
        onEdit(task.id, text);
        setIsEditing(false);
        toast.success("Đã chỉnh sửa nhiệm vụ!");
    };

    return (
        <div className="flex items-center justify-between border-b dark:border-gray-600 py-2 px-2 rounded hover:shadow-sm transition">
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                />
                {isEditing ? (
                    <input
                        className="border rounded px-2 dark:bg-gray-800 dark:text-white"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                ) : (
                    <span className={task.completed ? "line-through text-gray-400 dark:text-gray-500" : "dark:text-white"}>
                        {task.text}
                    </span>
                )}
            </div>

            <div className="flex gap-2">
                {isEditing ? (
                    <button onClick={handleEdit} className="text-green-600 flex items-center gap-1">
                        <Save size={16} /> Lưu
                    </button>
                ) : (
                    <button onClick={() => setIsEditing(true)} className="text-yellow-600 flex items-center gap-1">
                        <Pencil size={16} /> Sửa
                    </button>
                )}
                <button onClick={() => onDelete(task.id)} className="text-red-600 flex items-center gap-1">
                    <Trash2 size={16} /> Xoá
                </button>
            </div>
        </div>
    );
}

