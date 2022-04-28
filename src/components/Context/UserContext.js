import { createContext,useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({children}) => {

        const [form,setForm]  = useState({name:"",surname:""})
        const [data,setData] = useState([
            {name:"Ferhat",surname:"Macak"},
            {name:"Yasef",surname:"Ertekin"},
            {name:"İsmail",surname:"Gök"},
        ])
        const [formIsNull,setFormIsNull] = useState(false)
        const values={form,setForm,data,setData,formIsNull,setFormIsNull}
        return(
            <UserContext.Provider value={values}>{children}</UserContext.Provider>
        )
}

export default UserContext;