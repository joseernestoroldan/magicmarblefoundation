import Image from 'next/image'
import React from 'react'

const MainPost = ({ paddyFieldPosts }: any) => {
  return (
    <div className="w-2/3 flex flex-col space-y-8">

      <div className="bg-gray-400 h-[50vh] w-full rounded-l-[10px] relative overflow-hidden">
        <Image src={paddyFieldPosts[0].mainImage} className="object-cover z-0" alt="portal paddy field" fill/>
        <div className="h-[55vh] w-[300px] bg-green-950 absolute bg-opacity-65 flex flex-col space-y-4 justify-start items-center pt-8 pl-4">
            <h2 className='w-[300px] text-white text-2xl font-semibold'>{paddyFieldPosts[0].title}</h2>
            <p className='w-[300px] text-white text-base'>{paddyFieldPosts[0].description}</p>
        </div>
      </div></div>
  )
}

export default MainPost