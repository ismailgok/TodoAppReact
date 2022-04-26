import { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";

const Form = ({ form, onSubmitForm, onChangeInput }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme} mb-4`}>
            <input
                className="border mr-1 px-1 rounded-sm"
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={onChangeInput}
            />
            <input
                className="border mr-1 px-1 rounded-sm"
                placeholder="Surname"
                name="surname"
                value={form.surname}
                onChange={onChangeInput}
            />
            <button
                className="bg-white hover:bg-zinc-300 w-20 p-px text-black"
                onClick={onSubmitForm}
            >
                Add
            </button>
        </div>
    );
};

export default Form;
