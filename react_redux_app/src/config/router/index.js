import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Login, Signup,Dashboard,Mainhome } from "./screens";

export default function AppRouter() 
{
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Mainhome />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<>
        <h1 style={{textAlign:"center"}}>404 Page Found!!</h1>
        </>} />
      </Routes>
    </Router>
  );
}
