import { useState, createContext } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("bg-slate-800");

    const [formNull, setFormNull] = useState(false);
    const [form,setForm] = useState({name:"",surname:""})
    const [data, setData] = useState([
        { name: "Ferhat", surname: "Macak" },
        { name: "Yasef", surname: "Ertekin" },
        { name: "İsmail", surname: "Gök" },
    ]);
    const values = {
        theme,
        setTheme,
        formNull,
        setFormNull,
        form,
        setForm,
        data,
        setData,
    };

    return (
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    );
};

export default ThemeContext;
