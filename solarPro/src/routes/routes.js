import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "../pages/Create";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/*          steps              */}
        <Route path="/create" element={<Create />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
