import { getAllData } from '@/client';
import { QueryType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const MoreRecipiesPage = async () => {
    const recipies: QueryType[] = await getAllData('recipes')
    
  return (
    
    <div className="w-full bg-gradient-to-b from-white via-green-300 to-white flex flex-col items-center">
        <h1 className='text-green-950 text-2xl font-medium'>Recipies</h1>

        <div className='w-full max-w-5xl mx-auto flex flex-row justify-between gap-4 flex-wrap'>
            {recipies.map((recipe: QueryType, index: number) => {
                return(
                    <Link href={`/paddyfield/morerecipies/${recipe._id}`} key={index}>
                    <div className="w-300px flex flex-col itemss-center space-y-4 hover:brightness-75 cursor-pointer">
                      <div className="w-[300px] h-[300px] bg-gray-600 mt-8 relative rounded-[5px] overflow-hidden">
                        <Image
                          src={recipe.mainImage ?? "/no-profile,png"} 
                          alt="portal paddy field"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className=" w-300px flex flex-col space-y-4">
                        <h2 className="z-10 w-[300px] text-green-950 text-xl font-medium">
                          {recipe.title}
                        </h2>
                        <p className="w-[300px] text-green-950 text-base text-opacity-85">
                          {recipe.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                )
            })}
        </div>


    </div>
  )
}

export default MoreRecipiesPage