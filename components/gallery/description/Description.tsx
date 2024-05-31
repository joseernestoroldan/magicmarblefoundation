import React from 'react'
import { DescriptionProps } from '@/types/types'



const Description = ({content}: DescriptionProps) => {
  return (
    <div className='indent-6 text-gray-500 text-lg font-semibold flex justify-center text-justify items-center px-10'>
      
      {content}</div>
  )
}

export default Description