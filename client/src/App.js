import React from "react";
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Bikes from "./components/Bikes";
import UserProfile from "./components/UserProfile"; 
import ShoppingCart from "./components/ShoppingCart";
import AccessoriesTools from "./components/AccessoriesTools";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ServiceTickets from "./components/ServiceTickets";
import Employee from "./components/Employee";
import Home from "./components/Home";


function App() {
  const [currentUser, setCurrentUser] = useState(null)

  return (

    <BrowserRouter>
      <div className="App">

        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>

        <Routes>

          <Route path="/Bikes" element={<Bikes currentUser={currentUser}/>}/>

          <Route path="/UserProfile" element={<UserProfile currentUser={currentUser}/>}/>

          <Route path="/ShoppingCart" element={<ShoppingCart currentUser={currentUser}/>}/>

          <Route path="/AccessoriesTools" element={<AccessoriesTools />}/>

          <Route path="/LogIn" element={<SignIn setCurrentUser={setCurrentUser}/>}/>

          {/* <Route path="/Logout" element={<SignIn setCurrentUser={setCurrentUser}/>}/> */}

          <Route path="/SignUp" element={<SignUp setCurrentUser={setCurrentUser}/>}/>

          <Route path="/Services" element={<ServiceTickets currentUser={currentUser}/>}/>

          <Route path="/Employee" element={<Employee currentUser={currentUser}/>}/>

          <Route path="/" element={<Home currentUser={currentUser}/>} />

        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
