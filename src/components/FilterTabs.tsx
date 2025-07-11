interface Props {
    filter: string;
    onChange: (filter: string) => void;
}

export default function FilterTabs({ filter, onChange }: Props) {
    const tabs = ["Tất cả", "Chưa hoàn thành", "Đã hoàn thành"];

    return (
        <div className="flex justify-center gap-4 mb-4">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => onChange(tab)}
                    className={`px-4 py-2 rounded transition-colors duration-200 ${filter === tab
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 hover:bg-blue-100 dark:bg-gray-700 dark:text-white dark:hover:bg-blue-600"
                        }`}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
