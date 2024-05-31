import { getOne } from '@/client';
import Heading from '@/components/headings/heading';
import HeadingCenterAnimation from '@/components/headingsAnimations/HeadingCenterAnimation';
import Container from '@/components/layouts/container/Container';
import Parrafos from '@/components/parrafos/Parrafos';
import Photo from '@/components/photo/photo';
import React from 'react'

const FocusArea = async ({
  params: { id: _Id },
}: {
  params: { id: string };
}) => {

  const data = await getOne(_Id);

  return (
    <HeadingCenterAnimation>
    <Container>
      <div className="flex flex-col justify-center w-full h-auto">
        <div className="flex flex-col space-y-10 justify-center items-center lg:pt-20">
          <Heading
            title={data[0].title}
            color="text-cyan-500"
            shadow=""
            textSize="text-4xl"
            center="flex items-center justify-center"
          />
          {data[0].mainImage !== null && (
            <Photo
              width="w-full"
              height="h-[200px] md:h-[500px] lg:h-[700px]"
              alt=""
              borderRadius=""
              src={data[0].mainImage}
              objectFit="object-contain"
            />
          )}
          {data[0].contenido !== null && <Parrafos data={data} />}
        </div>
      </div>
    </Container>
  </HeadingCenterAnimation>
  )
}

export default FocusArea