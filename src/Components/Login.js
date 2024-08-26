import React from "react";
import { useState } from "react";
import Header from "./Header";

const Login = () => {
  let [isSignInFrom, setIsSignInFrom] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInFrom);
  };
  return (
    <>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg"
          alt="bg"
        />
      </div>
      <form className="bg-black absolute p-12 w-3/12 my-36 mx-auto rounded-lg right-0 left-0  text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFrom && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-900"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-900"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-900 "
        />
        <button className="p-2 my-4 bg-red-700  h-10 w-full rounded-lg">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4  cursor-pointer" onClick={toggleSignInForm}>
          {isSignInFrom
            ? "New to Netflix? Sign Up Now"
            : "Already registered Sign In Now"}
        </p>
      </form>
    </>
  );
};
export default Login;
