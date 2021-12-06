import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Bikes from "./components/Bikes";
import UserProfile from "./components/UserProfile"; 
import ShoppingCart from "./components/ShoppingCart";
import ServiceTickets from "./components/ServiceTickets";
import Home from "./components/Home";
import AccessoriesTools from "./components/AccessoriesTools";
import SignUp from "./components/SignUp";


function App() {
  return (

    <BrowserRouter>
      <div className="App">

        <Navbar />

        <Routes>

          <Route path="/Bikes" element={<Bikes />}/>

          <Route path="/UserProfile" element={<UserProfile />}/>

          <Route path="/ShoppingCart" element={<ShoppingCart />}/>

          <Route path="/AccessoriesTools" element={<AccessoriesTools />}/>

          <Route path="/SignUp" element={<SignUp />}/>

          <Route path="/Services" element={<ServiceTickets />}/>

          <Route path="/" element={<Home />} />

        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
