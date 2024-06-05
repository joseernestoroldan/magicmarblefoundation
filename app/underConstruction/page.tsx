
import Container from '@/components/layouts/container/Container'
import Photo from '@/components/photo/photo'
import React from 'react'

const UnderContructionPage = () => {
  return (
    <div>
        <Container>
            <Photo objectFit='object-cover' width='w-[1000px]' height='h-[800px]' borderRadius='' alt='' src='/underConstru.jpg'></Photo>
        </Container>
        
    </div>
  )
}

export default UnderContructionPage