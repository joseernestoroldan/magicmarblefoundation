import React from 'react'
import { WrapperGalleryProps } from '@/types/types'


const Wrapper = ({children}: WrapperGalleryProps) => {
  return (
    <div className="w-full flex flex-row justify-center gap-2 flex-wrap rounded-xl bg-opacity-20 border-card py-4 md:py-16">
        {children}
    </div>
  )
}

export default Wrapper