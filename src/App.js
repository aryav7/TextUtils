// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(22 28 82)";
      showAlert(" Dark mode has been enabled", "success ");
      document.title = "TextUtils - Dark MODE";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert(" Light mode has been enabled", "success ");
    }
  };
  return (
    // <Router>
    <>
      {/* <Navbar/> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About TextUtils"
      />
      <Alert alert={alert} />
      <div className="container my-3">
    {/* //     <Routes>
    //     <Route exact path="/About" element={<About/>}/>
    //     <Route exact path="/" element={<TextForm
    //           showAlert={showAlert}
    //           heading="Enter the text to analyze below "
    //           mode={mode}
    //         />}/>
    //     </Routes> */}
    <TextForm
    showAlert={showAlert}
    heading="Enter the text to analyze below "
    mode={mode}
    />
      </div>
      </>
    // </Router>
   
  );
}

export default App;
