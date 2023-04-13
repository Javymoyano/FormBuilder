import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/form/Form";
import Landing from "./routes/Landing";

function App() {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
