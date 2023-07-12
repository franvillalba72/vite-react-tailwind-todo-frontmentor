import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({todo, removeTodo, updateTodo}) => {
    const {id, title, completed} = todo;
    return (
        <article className="flex gap-3 items-center border-b border-b-gray-400 p-4">
            <button onClick={() => updateTodo(id)} className={`rounded-full border-2 w-5 h-5  ${
                completed 
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
                    :"inline-block"
                }`}>
                { completed && <IconCheck /> }
            </button>
            <p className={`text-gray-600 dark:text-gray-400 transition-all duration-1000 grow ${completed && "line-through"}`}>{title}</p>
            <button onClick={() => (removeTodo(id))} className="flex-none"><IconCross /></button>
        </article>
    );
}

export default TodoItem;