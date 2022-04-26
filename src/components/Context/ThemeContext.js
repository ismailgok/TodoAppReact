import { useState, createContext } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("bg-slate-800");

    const [formNull, setFormNull] = useState(false);

    const values = {
        theme,
        setTheme,
        formNull,
        setFormNull,
    };

    return (
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    );
};

export default ThemeContext;
