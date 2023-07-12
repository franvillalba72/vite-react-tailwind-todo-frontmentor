const TodoFilter = ({setFilter, filter}) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="bg-white dark:bg-gray-800 rounded-md transition-all duration-1000 p-4 flex justify-center gap-4">
                <button onClick={() => setFilter('all')} className={`${filter==='all' ? "text-blue-600 font-bold" : "text-gray-400 hover:text-blue-600"}`}>All</button>
                <button onClick={() => setFilter('active')} className={`${filter==='active' ? "text-blue-600 font-bold" : "text-gray-400 hover:text-blue-600"}`}>Active</button>
                <button onClick={() => setFilter('completed')} className={`${filter==='completed' ? "text-blue-600 font-bold" : "text-gray-400 hover:text-blue-600"}`}>Completed</button>
            </div>
        </section>
    );
}

export default TodoFilter;