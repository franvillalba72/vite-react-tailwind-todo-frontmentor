import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
    return (
        <div className="min-h-screen bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 sm:bg-[url('./assets/images/bg-desktop-light.jpg')]">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="uppercase text-white text-3xl font-semibold tracking-[.5em]">Todo</h1>
                    <button><MoonIcon fill={'#fff'}/></button>
                </div>
                <form className="bg-white rounded-md p-4 mt-8 flex gap-3 items-center">
                    <span className="rounded-full border-2 w-5 h-5 inline-block "></span>
                    <input
                        type="text"
                        name=""
                        placeholder="Create a new todo..."
                        className="w-full text-xs font-semibold text-gray-500 outline-none" />
                </form>
            </header>
            <main className="container mx-auto px-4 mt-8">
                <div className="bg-white rounded-md">
                    <article className="flex gap-3 items-center border-b border-b-gray-400 p-4">
                        <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
                        <p className="text-gray-600 grow">Complete online JavaScript course</p>
                        <button className="flex-none"><CrossIcon /></button>
                    </article>

                    <article className="flex gap-3 items-center border-b border-b-gray-400 p-4">
                        <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
                        <p className="text-gray-600 grow">Complete online JavaScript course</p>
                        <button className="flex-none"><CrossIcon /></button>
                    </article>

                    <article className="flex gap-3 items-center border-b border-b-gray-400 p-4">
                        <button className="rounded-full border-2 w-5 h-5 inline-block"></button>
                        <p className="text-gray-600 grow">Complete online JavaScript course</p>
                        <button className="flex-none"><CrossIcon /></button>
                    </article>

                    <section className="p-4 flex justify-between">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">Clear completed</button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto px-4 mt-8">
                <div className="bg-white rounded-md p-4 flex justify-center gap-4">
                    <button className="hover:text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>

            <section className=" text-center container mx-auto px-4 mt-8">
                Drag and drop to reorder list
            </section>
        </div>
    )
}

export default App;