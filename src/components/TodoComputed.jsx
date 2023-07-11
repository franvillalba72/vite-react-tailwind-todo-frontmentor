const TodoComputed = ({computedItemsLeft, clearCompleted}) => {
    return (
        <section className="p-4 flex justify-between rounded-b-md bg-white">
            <span className="text-gray-400">{computedItemsLeft} items left</span>
            <button onClick={clearCompleted} className="text-gray-400">Clear completed</button>
        </section>
    );
}

export default TodoComputed;