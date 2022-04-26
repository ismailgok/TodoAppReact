import { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import DarkButton from "./DarkButton";
const List = ({ data }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="container mt-6">
            <div className="flex flex-row items-center">
                <h1
                    className={
                        theme === "bg-slate-800"
                            ? "text-white border-sky-400 text-2xl w-12 border-b-4 my-3"
                            : "text-black text-sky-900 border-sky-700 text-2xl w-12 border-b-4 my-3"
                    }
                >
                    List
                </h1>
                <DarkButton />
            </div>
            <div>
                {data.map((item, index) => (
                    <li
                        key={index}
                        className="px-2 rounded-sm w-1/2 cursor-pointer my-2 bg-sky-600 hover:bg-sky-700 p-1 overflow-auto list-none text-white font-medium"
                    >
                        {item.name} {item.surname}
                    </li>
                ))}
            </div>
        </div>
    );
};

export default List;

// yapılacaklar: container height ayarlanacak, return false ayarlanacak
