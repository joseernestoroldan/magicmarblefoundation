import React from "react";
import { FaFacebook } from "react-icons/fa";
import { signIn } from "@/auth";


const LoginFacebook = () => {

  return (
    <form action={async () => {
      "use server"
      await signIn("facebook", {redirect:true,  redirectTo: "/settings",})
    }}>
      
        <button
          type="submit"
          className="flex flex-row justify-center items-center w-[250px] py-3 bg-blue-500 text-white hover:bg-blue-400 gap-x-4 border border-gray-200 border-solid rounded-[5px]"
        >
          <FaFacebook className="text-lg text-white" />
          Sign in with Facebook 
        </button>
      
    </form>
  );
};

export default LoginFacebook;
