import React from 'react'

type SeparatorProps = {
    title: string
}

const Separator = ({title}: SeparatorProps) => {
  return (
    <div className='w-3/4 border-gray-300 border-top border-t relative'>
        <p className='bg-white text-gray-500 absolute left-1/2 -translate-x-1/2 -translate-y-3 px-4'>{title}</p>
    </div>
  )
}

export default Separator