import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Order from './pages/Order/Order.jsx';
import Restaurant from './pages/Restaurant/Restaurant.jsx';
import RestaurantAdd from './pages/Restaurant/RestaurantAdd';
import RestaurantDelete from './pages/Restaurant/RestaurantDelete';
import Bar from './pages/Bar/Bar.jsx';
import BarAdd from "./pages/Bar/BarAdd.jsx";
import BarDelete from "./pages/Bar/BarDelete.jsx";
import Food from './pages/Food/Food.jsx';
import ViewDish from './pages/Food/ViewDish.jsx';
import Waiter from './pages/Waiter/Waiter.jsx';
import QandA from './pages/Q&A/QandA.jsx';
import Menu from './pages/Menu/Menu';
import AddMenu from './pages/Menu/addMenu';
import Driver from './pages/Driver/Driver.jsx';
import History from'./pages/Order/history.jsx';


// import Loginfrom from './components/logn';
const App = () => {
  return (
   
    <BrowserRouter>
    
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Order/history" element={<History />} />

          <Route path="/Bar" element={<Bar />} />
          <Route path="Bar/BarAdd" element={<BarAdd />} />
          <Route path="Bar/BarDelete" element={<BarDelete />} />

          <Route path="/Restaurant" element={<Restaurant/>} />
          <Route path="/Restaurant/RestaurantAdd" element={<RestaurantAdd/>} />
          <Route path="/Restaurant/RestaurantDelete" element={<RestaurantDelete/>} />

          <Route path="/Food" element={<Food />} />
          <Route path="/Food/ViewDish" element={<ViewDish />} />

          <Route path="/Waiter" element={<Waiter />} />
          <Route path="/QandA" element={<QandA />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Menu/addMenu" element={<AddMenu/>} />
          <Route path="/Driver" element={<Driver />} />
          <Route path='/somewhere' render={() => <h2>You Are Somewhere</h2>} />
        </Routes>
      </Sidebar>
     
    </BrowserRouter>
    
  );
};

export default App;