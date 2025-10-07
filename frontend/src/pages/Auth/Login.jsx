import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/userContext";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

const handleLogin = async (e) => {
  e.preventDefault();

  if (!validateEmail(email)) {
    setError("Please enter a valid email address.");
    return;
  }

  if (!password) {
    setError("Please enter the password");
    return;
  }

  setError("");

  