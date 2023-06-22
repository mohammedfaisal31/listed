import React, { useEffect, useState } from 'react';
import {FcGoogle} from "react-icons/fc";
import {AiFillApple} from "react-icons/ai";
import AnimatedCursor from "react-animated-cursor"
import jwt_decode from "jwt-decode";
const Form = ({ sendDataToParent }) => {
  const handleCallBack = (res)=>{
    sendDataToParent(jwt_decode(res.credential))
    document.getElementById("sign-in-google").hidden = true;
  }
  
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id : "1090188692018-46of5flcu5a6buaahjt3tortafdri8er.apps.googleusercontent.com",
      callback: handleCallBack
    })
    
    google.accounts.id.renderButton(document.getElementById("sign-in-google"),{theme:"outline",size:"large"})
    
  }, [])
  
  
  return (
    <div className="flex flex-col items-center justify-center h-full">
      
      <h2 className="text-4xl font-bold mb-1">Sign In</h2>
      <p>Sign in to your account</p>
      <div className="flex space-x-4 mb-4 mt-5">
        <button id="sign-in-google" className="flex items-center justify-center h-10 bg-gray-200 text-black">
          <FcGoogle className="ml-2" size={20} />
          <span className="ml-2 text-sm text-gray-400 mr-2" >Sign in with Google</span>
        </button>
        <button className="flex items-center justify-center h-10 bg-gray-200 text-black">
          <AiFillApple className="ml-2 text-gray-500" size={20} />
          <span className="ml-2 text-sm text-gray-400 mr-2">Sign in with Apple</span>
        </button>
      </div>
      <form className="flex flex-col space-y-4 w-80 mt-7">
        <label className="text-base font-bold" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Email Address"
          className="px-4 py-2 border border-gray-300 rounded"
        />
         <label className="text-base font-bold" htmlFor="password">
            Password
         </label>
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 border border-gray-300 rounded"
        />
        <a href="#" className="text-blue-500">Forgot Password?</a>
        <button className="px-4 py-2 bg-black text-white rounded w-full">
      Sign In
    </button>
      </form>
      <p className="mt-8">
        Don't have an account? <a href="#" className="text-blue-500">Register here</a>
      </p>
      
    </div>
  );
};

export default Form;
