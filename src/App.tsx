import React from "react";
import "./App.css";
import { NavBar, Main, Resume, Contact } from "./pages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
