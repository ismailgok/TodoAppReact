import Form from "./Form";
import { useEffect, useContext } from "react";
import List from "./List";
import ThemeContext from "./Context/ThemeContext";
import FormError from "./FormError";
import UserContext from "./Context/UserContext";

function Container() {
    const { formIsNull, setFormIsNull, form, setForm, data, setData } =
        useContext(UserContext);
    const { theme } = useContext(ThemeContext);

    const onChangeInput = (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const onSubmitForm = () => {
        if (form.name === "" || form.surname === "") {
            setFormIsNull(true);

            setTimeout(() => {
                setFormIsNull(false);
            }, 2000);

            return false;
        } else {
            setData([form, ...data]);
        }
    };
    
    useEffect(() => {
        setForm({ name: "", surname: "" });
    }, [setForm,data, formIsNull]);
    return (
        <div
            className={
                theme !== "bg-slate-800"
                    ? `${theme} container-full h-screen overflow-auto px-5 py-5`
                    : ` ${theme} container-full h-screen overflow-auto px-5 py-5`
            }
        >
            <Form
                form={form}
                onChangeInput={onChangeInput}
                onSubmitForm={onSubmitForm}
            />
            {formIsNull === true ? <FormError /> : ""}
            <List data={data} />
        </div>
    );
}

export default Container;
