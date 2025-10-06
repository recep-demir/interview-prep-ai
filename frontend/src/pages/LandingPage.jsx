import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import Modal from "../components/Modal";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";

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
      {/* Ana sayfa arka planı */}
      <div className="w-full min-h-screen bg-[#FFFCEF] flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-black mb-4">
          Ace Interviews with <span className="text-orange-500">AI</span>
        </h1>
        <p className="text-gray-700 max-w-xl mb-8">
          Get personalized interview questions powered by AI and track your progress easily.
        </p>

        {/* Buton */}
        <button
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-orange-500 transition-colors"
          onClick={handleCTA}
        >
          Get Started
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
        {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
      </Modal>
    </>
  );
};

export default LandingPage;
