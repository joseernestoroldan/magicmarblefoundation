"use client"
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

const RegisterGoogle = () => {
  return (
    
    <button className="flex flex-row justify-center text-gray-500 items-center w-[200px] py-3 hover:bg-gray-100 gap-x-4 border border-gray-200 border-solid rounded-[5px]">
      <FcGoogle className="text-sm" />
      Sign up with Google
    </button>
  
  )
}

export default RegisterGoogle