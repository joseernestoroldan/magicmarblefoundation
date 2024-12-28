import Loader from '@/components/Loader/Loader'
import React from 'react'

const loading = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[80vh]'>
        <Loader/>
    </div>
  )
}

export default loading