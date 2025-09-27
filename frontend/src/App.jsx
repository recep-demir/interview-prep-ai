import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./pages/Home/Dashboard";
import InterviewPrep from "./pages/InterviewPrep/InterviewPrep";
import { UserProvider } from "./context/userContext";




const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          
        </Router>

      </div>
      </UserProvider>
  )
}

export default App