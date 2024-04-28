import React from "react"
import Image from "next/image";
import pateronLogo from '../patreon.svg'
import googleIcon from '../svg/google.svg'
import appleIcon from '../svg/apple.svg'
import facebookIcon from '../svg/facebook.svg'

// Login Signup
const LoginSignUp = (props) => {
  return (
    <div>
      <div className="flex flex-col mt-20 items-center gap-5">
      <Image
       src={pateronLogo}
       width={40}
       height={40}
       alt="patreon"
       /> 
      <h1 className=" font-semibold text-2xl">Log In or Sign Up</h1>
   
   <div className="flex flex-col w-[400px]">

    <button type="button" className="text-black border border-[#dadce0]  bg-[#fff] hover:bg-[#dadce0]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
    <div className="flex flex-row m-auto gap-3">
    <Image
       src={googleIcon}
       width={20}
       height={20}
       alt="patreon"
       />
       
    <span>Continue with Google</span>
    </div>
  </button>

    <button type="button" className="text-black border border-[#dadce0]  bg-[#fff] hover:bg-[#dadce0]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
    <div className="flex flex-row m-auto gap-3">
    <Image
       src={appleIcon}
       width={20}
       height={20}
       alt="patreon"
       />
    <span>Continue with Apple</span>
    </div>
  </button>

  <button type="button" className="text-black border border-[#dadce0]  bg-[#fff] hover:bg-[#dadce0]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
    <div className="flex flex-row m-auto gap-3">
    <Image
       src={facebookIcon}
       width={20}
       height={20}
       alt="patreon"
       />
    <span>Continue with Facebook</span>
    </div>
  </button>
  </div>

  
  <span>or</span>
   <div className=" w-[400px]">
  <input type="email" name="email"  placeholder="Email" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" required />
   </div>

   <div>
  <button type="button"  className="text-white bg-[#070707] border w-[400px] border-[#dadce0]  focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
   <span className=" m-auto">Continue</span>
  </button>  
  </div>

  <a href='https://www.google.com/' target="_blank">
  <span className=" text-[#00000099] font-semibold">Need help signing in?</span>
 </a>

 <div>
  <p className=' w-1/2 m-auto text-[10px]'>By signing up, you are creating a Patreon account and agree to 
     Patreon’s <a href ='https://www.patreon.com/policy/legal' className=" font-bold" target="_blank"> Terms </a> and
     <a href='https://privacy.patreon.com/policies' className=" font-bold ml-1"  target="_blank">Privacy Policy</a>
     </p>
 </div>

  </div>
      </div>
    
  )
};

export default LoginSignUp;
