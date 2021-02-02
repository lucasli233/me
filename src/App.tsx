import React from "react";
import "./App.scss";
import { NavBar, Main, About, Resume, Contact, Portfolio } from "./pages";
{
  /* <meta name="viewport" content="width=device-width, initial-scale=1"></meta> */
}

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Main />
//       <Portfolio />
//       <Resume />
//       <About />
//       <Contact />
//     </div>
//   );
// }

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  return (
    <div className="App">
      <div className="mobile"></div>
      <NavBar />
      <Main />
      <Portfolio />
      <Resume />
      <About />
      <Contact />
    </div>
  );
}

export default App;
