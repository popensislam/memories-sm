import React, { useState } from "react";

import AuthContainer from "../containers/AuthContainer/AuthContainer";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import { useRegUserMutation, useSignInUserMutation } from "../store/authServices/authApi";
import { useAppDispatch } from "../store/hooks";
import { setCurrentUser } from "../store/slices/userSlice";

export type AuthDataTypes = {
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  email: string;
  image: string;
};

const AuthPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [useSignIn] = useSignInUserMutation();
  const [useRegUser] = useRegUserMutation();

  const [authData, setAuthData] = useState<AuthDataTypes>({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    image: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { data, error }: any = await useSignIn({
      email: authData.email,
      password: authData.password,
    });
    if (error) {
      toast.warn(`Status code ${error.status}. ${error.data.message}`);
      return;
    }
    dispatch(setCurrentUser(data.result));
    await localStorage.setItem("access", data.token);
    navigate("/")
  };

  function handleChange(e: any) {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    });
  }

  const googleSuccess = () => {
    console.log("Google AUTH (not working now)");
  };

  const googleFailure = () => {
    console.log("Google AUTH (not working now)");
  };

  return (
    <>
      <AuthContainer
        handleSubmit={handleSubmit}
        isSignup={isSignup}
        setIsSignup={setIsSignup}
        authData={authData}
        handleChange={handleChange}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        setAuthData={setAuthData}
        googleSuccess={googleSuccess}
        googleFailure={googleFailure}
      />
    </>
  );
};

export default AuthPage;
