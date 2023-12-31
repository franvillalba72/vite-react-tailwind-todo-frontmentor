import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialDarkMode = document.documentElement.className.includes("dark");

const Header = () => {
    // Se puede hacer con useRef pero así es mejor
    const [darkMode, setDarkMode] = useState(initialDarkMode);

    // Este código se ejecuta cada vez que cambia el darkMode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)} title="Pulsa para cambiar fondo">
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
