import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Profile from './Pages/Profile';


function App() {
  return (
   <>
   <Navbar/>
   <BrowserRouter>
   

   <Routes>
  <Route path="/" element={<Home/>}/>
  {/* <Route path='/about' element={<About/>}/> */}
  <Route path='/profile' element={<Profile/>}/>

  
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
