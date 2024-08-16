import AdoptionCarousel from '@/components/adoptions/adoptionCarousel/AdoptionCarousel'
import AdoptionGrid from '@/components/adoptions/adoptionGrid/AdoptionGrid'
import React from 'react'

const AdoptionsPage
 = () => {
  return (
    <div className='w-full mx-auto flex flex-col justify-center'>
        <AdoptionCarousel/>
        <AdoptionGrid/>
    </div>
  )
}

export default AdoptionsPage
