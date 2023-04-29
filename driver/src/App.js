import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Map from "./pages/Map";
import SmallMap from './pages/SmallMap';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/smallMap" element={<SmallMap />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
