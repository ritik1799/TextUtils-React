import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textbar from './components/Textbar';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  const [mode,setMode]=useState('light');
  const[ alert ,setAlert]= useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='#250357';
   showAlert("Dark mode has been enabled","success");
   document.title="TextUtils- Dark Mode"
   /*setInterval(() => {
    document.title="TextUtils is amazing"
   }, 2000);
   setInterval(() => {
    document.title="Install TextUtils"
   }, 1500);*/
    }
    else {
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Dark mode has been disabled","success");
    document.title="TextUtils- Light Mode"
    }
  }
  return (
    <>
    <Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/> 
<div className="container">
          <Routes>
            <Route exact path="/about" 
            element={<About />}>
            </Route>
            <Route exact path="/" 
            element={<Textbar heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        
</div>
</Router>
</>
  );
}

export default App;
