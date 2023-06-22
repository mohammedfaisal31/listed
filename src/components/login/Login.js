import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Form from './right-components/Form';
import AnimatedCursor from "react-animated-cursor";

const Login = ({sendDataToParent}) => {

  const handleDataFromChild = (user) => {
    sendDataToParent(user);
  };
  
  return (
    <div className="flex h-screen">
      <div className="w-2/5 bg-black flex items-center justify-center">
       {/* <h1 className='text-white text-6xl font-bold leading-tight font-montserrat'>Board.</h1> */}
       <TypeAnimation
                sequence={[
                  "Designed",
                  2000,
                  "By",
                  2000,
                  "Md.Faisal :)",
                  2000
                ]} 
                speed={50}
                className='text-white text-6xl font-bold leading-tight font-montserrat'
                wrapper='span'
                repeat={Infinity}
        /> 
        {/* <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='0, 0, 0'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    /> */}
      </div>
      <div className="w-3/5 bg-white h-full">
        <Form sendDataToParent={handleDataFromChild}/>
      </div>
    </div>
  );
};

export default Login;
