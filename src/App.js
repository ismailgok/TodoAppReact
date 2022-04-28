import React from "react";
import Container from "./components/Container";
import { ThemeContextProvider } from "./components/Context/ThemeContext";
import { UserContextProvider } from "./components/Context/UserContext";
const App = () => {
    return (
        <ThemeContextProvider>
            <UserContextProvider>
                <Container />
            </UserContextProvider>
        </ThemeContextProvider>
    );
};

export default App;
