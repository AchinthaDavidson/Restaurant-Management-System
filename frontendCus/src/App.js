import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/homepage';
import Menu from './Pages/Menu/Menu';
import FAQ from './Pages/FAQ/FAQ';
import Chat from './Pages/Chat/Chat'
import {BrowserRouter,Route, Routes } from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import ForgotPass from "./screens/ForgotPass";
import OtpScreen from "./screens/OtpScreen";
import ResetPass from "./screens/ResetPass";
import Dashboard from "./screens/Dashboard";


function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>

          <Route path="/Login" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/forgot-password/validate" element={<OtpScreen />} />
          <Route path="/forgot-password/reset" element={<ResetPass />} />


          <Route path="/" element={<Homepage />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/FAQs" element={<FAQ />} />
          <Route path="/Chat" element={<Chat />} />
    </Routes>
    
  </BrowserRouter>
 

  </>
    

    
  );
}

export default App;
