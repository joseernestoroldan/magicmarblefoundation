"use client"
import React from 'react'
import { BsInfoCircle } from "react-icons/bs";
import { useState } from 'react';
import Info from './info';

type InfoPhotoProps = {
    title: string
    description: string
}


const InfoPhoto = ({title, description}: InfoPhotoProps) => {
    const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div  className={`${toggle ? 'w-full': 'w-fit' }`}>
        {!toggle && <div onClick={() => setToggle(!toggle)} className='text-white flex items-center gap-2 cursor-pointer p-4'><BsInfoCircle/> <p className=''>Info</p></div>}
        {toggle && <Info title={title} description={description} toggle={toggle} setToggle={setToggle}/>}
    </div>

    

    
  )
}

export default InfoPhoto