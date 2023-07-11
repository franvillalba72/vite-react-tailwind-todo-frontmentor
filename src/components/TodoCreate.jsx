import { useState } from "react";

const TodoCreate = ({createTodo}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (title.trim().length > 0) {
            createTodo(title);
        }
        
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-md p-4 flex gap-3 items-center">
            <span className="rounded-full border-2 w-5 h-5 inline-block "></span>
            <input
                type="text"
                name=""
                placeholder="Create a new todo..."
                className="w-full text-xs font-semibold text-gray-500 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
}

export default TodoCreate;