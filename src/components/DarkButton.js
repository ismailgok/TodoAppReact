import { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";

const DarkButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div>
            <button
                onClick={() =>
                    setTheme(
                        theme === "bg-slate-800"
                            ? "bg-slate-50"
                            : "bg-slate-800"
                    )
                }
                className="ml-36 bg-sky-800 hover:bg-sky-900 h-7 px-1 items-center justify-center px-py text-sm text-white rounded-md"
            >
                Dark Mode
            </button>
        </div>
    );
};

export default DarkButton;
