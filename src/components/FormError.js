import { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";

const FormError = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div
            className={
                theme === "bg-slate-800"
                    ? "text-sm text-white w-1/2 p-1"
                    : "text-sm text-slate-800 w-1/2 p-1"
            }
        >
            Name or Surname is undefined
        </div>
    );
};

export default FormError;
