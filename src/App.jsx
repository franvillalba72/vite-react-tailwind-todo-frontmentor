import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

// const InitialStateTodos = [
//     { id: 1, title: 'Ir al gimnasio', completed: false },
//     { id: 2, title: 'Completar curso react', completed: true },
//     { id: 3, title: 'Recoger hijo de academia', completed: false },
//     { id: 4, title: 'Meditación ', completed: true },
// ]

const InitialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {
    const [todos, setTodos] = useState(InitialStateTodos);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false
        };

        setTodos([...todos, newTodo]);
    }

    const updateTodo = (id) => {
        /* const newArray = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(newArray); */

        setTodos(todos.map(
            todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    }

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const computedItemsLeftOld = () => {
        return todos.filter((todo) => !todo.completed).length;
    }

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    }

    const [filter, setFilter] = useState('all');

    const filteredTodos = () => {
        switch (filter) {
            case 'all':
                return todos;

            case 'active':
                return todos.filter((todo) => !todo.completed);

            case 'completed':
                return todos.filter((todo) => todo.completed);

            default:
                return todos;
        }
    }

    return (
        <div className="min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-no-repeat bg-contain bg-gray-200 dark:bg-gray-950 md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')] transition-all duration-1000">

            <Header />

            <main className="container mx-auto px-4 mt-8 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />

                <TodoList todos={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo} />

                <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />

                <TodoFilter setFilter={setFilter} filter={filter} />
            </main>

            <footer className="dark:text-gray-400 transition-all duration-1000 text-center container mx-auto px-4 mt-8">
                Drag and drop to reorder list
            </footer>
        </div>
    )
}

export default App;