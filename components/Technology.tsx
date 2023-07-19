import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFlip } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-flip'

interface TechnologyProps {
    className?: string
    image: string
    label: string
    text: string
    color: string
}

const Technology: React.FC<TechnologyProps> = ({
    className, image, text, label, color
}) => {
  return (
    <Swiper
    effect='flip'
    className={className}
    modules={[ EffectFlip ]}
    >
        <SwiperSlide className={'bg-lime-500 rounded-3xl w-full   h-full p-5 flex justify-center'}>
            <div className="flex flex-col items-center justify-end gap-8 min-h-full  object-contain">
                <h1 className='text-3xl font-semibold text-black '>
                    {label}
                </h1>
                <img src={image} alt="" className='object-contain max-h-80'/>
            </div>
        </SwiperSlide>
        <SwiperSlide className='bg-lime-500 text-gray-900 rounded-3xl w-full font-semibold h-full text-2xl  p-8'>
            {text}
        </SwiperSlide>
    </Swiper>
  )
}

export default Technology