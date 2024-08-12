import React from 'react'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import { useState } from 'react';
import Home from './Components/Home';

function App() {
    const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
  }

  const togglemode = ()=> {
    if(mode === 'light'){
      setmode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode enabled.","success!")
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode enabled.","success!")
    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    
    <Routes>
    <Route path="/*" element={<Home/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/TextForm" element={<TextForm heading="Enter text below to analyze" mode={mode}/>}/>
    <Route path="/About" element={<About/>}/>
    </Routes>
    
    </>
  )
}

export default App

