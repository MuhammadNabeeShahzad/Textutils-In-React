/* eslint-disable jsx-a11y/anchor-is-valid */


import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState} from 'react'
function App() {
  const [mode, setMode]= useState("light");
const toggleMode=()=>{
  if(mode ==="light"){
    setMode("dark");
}
  else{
    setMode("light");
}
}
  return (
    <>
     <Navbar tittle="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading ="ENTER THE TEXT TO ANALYZE" />
    </>
  );
}

export default App;
