import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";



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
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "darkBlue";
      showAlert("Dark Mode Enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "Success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          text="About"
          home="Home"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route exact */}
              {/* path="/" */}
              {/* element={ */}
                <TextForm
                  heading="Enter the Text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              {/* } */}
            {/* /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
