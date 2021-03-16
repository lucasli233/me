import React from "react";
import "./App.scss";
import { NavBar, Main, About, Resume, Contact, Portfolio } from "./pages";

function Mobile() {
  return (
    <div className="mobile">
      Website not optimized for small screens <br />
      please resize window and refresh <br />
      or view on desktop 😋
    </div>
  );
}

function App() {
  const w = window.innerWidth;
  console.log(w);
  if (w >= 1040) {
    return (
      <div className="App">
        <NavBar />
        <Main />
        <Portfolio />
        <Resume />
        <About />
        <Contact />
      </div>
    );
  } else {
    return <Mobile />;
  }

  // return (
  //   <div className="App">
  //     <div className="mobile"></div>
  //     <NavBar />
  //     <Main />
  //     <Portfolio />
  //     <Resume />
  //     <About />
  //     <Contact />
  //   </div>
  // );
}

export default App;
