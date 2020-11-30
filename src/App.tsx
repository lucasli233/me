import React from "react";
import "./App.scss";
import { NavBar, Main, About, Resume, Contact } from "./pages";
{/* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */}

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
