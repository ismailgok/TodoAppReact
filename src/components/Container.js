import Form from "./Form";
import {useEffect, useContext } from "react";
import List from "./List";
import ThemeContext from "./Context/ThemeContext";
import FormError from "./FormError";
function Container() {
    const { theme, formNull, setFormNull,form,setForm,data,setData } = useContext(ThemeContext);
    
    const onChangeInput = (e) => {
        e.preventDefault();
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        setForm({ name: "", surname: "" });
    }, [data,formNull]);
    const onSubmitForm = () => {
        if (form.name === "" || form.surname === "") {
            setFormNull(true);

            setTimeout(() => {
                setFormNull(false);
            }, 2000);

            return false;
        } else {
            setData([form, ...data]);
        }
    };
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
            {formNull === true ? <FormError /> : ""}
            <List data={data} />
        </div>
    );
}

export default Container;
