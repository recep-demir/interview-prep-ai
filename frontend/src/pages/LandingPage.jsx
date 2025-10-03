import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { UserContext } from "../context/UserContext"

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      {/* This is the landing page */}

      <button onClick={handleCTA}>
        {user ? "Go to Dashboard" : "Login / Sign Up"}
      </button>

      <Modal isOpen={openAuthModal} onClose={() => setOpenAuthModal(false)}>
        {currentPage === "login" ? (
          <Login switchToSignUp={() => setCurrentPage("signup")} />
        ) : (
          <SignUp switchToLogin={() => setCurrentPage("login")} />
        )}
      </Modal>
    </>
  );
};

export default LandingPage;
