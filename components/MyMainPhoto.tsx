'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { EffectFade, Pagination } from 'swiper/modules';

interface MyMainPhotoProps {
    photos: string[]
}

const MyMainPhoto: React.FC<MyMainPhotoProps> = ({photos}) => {

  return (
    <div className="max-h-[400px] max-w-[300px] w-full h-full rounded-l-3xl rounded-r-full">
        
        <Swiper
            modules={[ EffectFade, Pagination ]}
            effect='fade'
            className='max-h-[400px] max-w-[300px] w-full h-full'
            spaceBetween={50}
            slidesPerView={1}
            autoplay={true}
            pagination={{ clickable: true }}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >

        {
            photos.map( (photo) => 
                <SwiperSlide>
                    <img className='object-cover max-w-[300px] max-h-[400px] rounded-xl rounded-tr-[50px] rounded-bl-[50px]' src={photo} alt="" />
                </SwiperSlide>
            )
        }

    </Swiper>
    </div>
  )
}

export default MyMainPhoto