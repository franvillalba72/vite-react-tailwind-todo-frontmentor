const TodoFilter = ({setFilter, filter}) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="bg-white rounded-md p-4 flex justify-center gap-4">
                <button onClick={() => setFilter('all')} className={`${filter==='all' ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}>All</button>
                <button onClick={() => setFilter('active')} className={`${filter==='active' ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}>Active</button>
                <button onClick={() => setFilter('completed')} className={`${filter==='completed' ? "text-blue-600 font-bold" : "hover:text-blue-600"}`}>Completed</button>
            </div>
        </section>
    );
}

export default TodoFilter;