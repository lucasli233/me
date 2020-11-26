import React from "react";
import "./App.scss";
import { NavBar, Main, About, Resume, Contact } from "./pages";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Main />
            <Resume />
            <About />
            <Contact />
        </div>
    );
}

export default App;
