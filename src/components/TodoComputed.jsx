const TodoComputed = ({computedItemsLeft, clearCompleted}) => {
    return (
        <section className="p-4 flex justify-between rounded-b-md bg-white dark:bg-gray-800 transition-all duration-1000">
            <span className="text-gray-400">{computedItemsLeft} items left</span>
            <button onClick={clearCompleted} className="text-gray-400">Clear completed</button>
        </section>
    );
}

export default TodoComputed;