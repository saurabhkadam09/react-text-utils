import './App.css';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const showToastMessage = (notifyMessage) => {
    toast.success(notifyMessage, {
        position: toast.POSITION.TOP_RIGHT
      });
    };

  const [style, setStyle] = useState({
    backgroundColor: "#e3f2fd",
  })

  const [mode, setMode] = useState('light')
  let handleMode = (event) => {
    if (mode === "dark"){
      setMode("light")
      setStyle({
        backgroundColor: "#e3f2fd",
      })
      document.body.style.backgroundColor = "white"
      showToastMessage("Light mode enabled!")
    }
    else{
      setMode("dark")
      setStyle({
        backgroundColor: "#9481a7",
      })
      document.body.style.backgroundColor = "#50435d"
      showToastMessage("Dark mode enabled!")
    };
    
  };

  
  return (
    <>
    <Navbar title= "TextUtils" handleMode={handleMode} mode={mode} style={style}/>
    <Alert alertMessage="This is test"/>
    < ToastContainer autoClose={1000}/>
    <Routes>
      
      <Route path='/' element={<Textform mode={mode} style={style} showToastMessage={showToastMessage}/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    
    </>
  );
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

export default App;
