import { Task } from "../types/task";
import TaskItem from "./TaskItem";

interface Props {
    tasks: Task[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newText: string) => void;
}

export default function TaskList({ tasks, ...props }: Props) {
    if (tasks.length === 0) return <p className="text-center text-gray-400">Không có nhiệm vụ.</p>;

    return (
        <div className="space-y-2">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} {...props} />
            ))}
        </div>
    );
}