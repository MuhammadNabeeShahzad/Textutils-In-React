/* eslint-disable jsx-a11y/anchor-is-valid */


import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState} from 'react'
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
 
  Route,
Routes,

} from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  const [mode, setMode]= useState("light");
  const [alert, setAlert]= useState(null);
const showAlert=(message, type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
}
const toggleMode=()=>{

  if(mode ==="light"){
    setMode("dark");
    showAlert("Dark mode has been enabled", "success");
}
  else{
    setMode("light");
    showAlert("Light mode has been enabled", "success");

}
}
  return (
    <>
    <Router>
     <Navbar tittle="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
      
      <Routes>
          <Route path="/About" element={<About/>}>
           
          </Route>
          <Route path="/" element={<TextForm heading ="ENTER THE TEXT TO ANALYZE" showAlert={showAlert} />}>
          
          </Route>
         
        </Routes>
        <Footer/>
        </Router>
    </>
  );
}

export default App;
