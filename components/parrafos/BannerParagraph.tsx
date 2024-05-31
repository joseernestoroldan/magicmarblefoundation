import React from 'react'

type BannerParagraphProps = { 
    children: React.ReactNode
}

const BannerParagraph = ({children}: BannerParagraphProps) => {
  return (
    <div className='text-center py-24 border-t border-b border-gray-500 text-gray-500 font-medium text-xl max-w-[1000px]'>
        {children}
    </div>
  )
}

export default BannerParagraph