import React from "react";
import { SignInSignUpContainer } from "./sign-in-and-sign-up.styles";
import SignIn from "../../Components/sign-in/SignIn";
import SignUp from "../../Components/sign-up/SignUp";
// import app from "../../Firebase/Firebase.utils";

const SignInAndSignUpPage = () => {
  return (
    <SignInSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInSignUpContainer>
  );
};

export default SignInAndSignUpPage;
