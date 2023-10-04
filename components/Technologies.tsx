'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import s from './styles/Technologies.module.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards'


import Technology from './Technology';
import { Navigation, EffectCards } from 'swiper/modules';


const Technologies = () => {
    const technologies = [
        {
            image: 'https://i.imgur.com/ouDD0qY.png',
            label: 'React',
            text: 'React is a JavaScript library for building user interfaces with reusable components and efficient state management. It offers a declarative approach to UI development and excels in performance and flexibility.',
            color: '#666666',
        },
        {
            image: 'https://i.imgur.com/3dNRDvs.png',
            label: 'Next',
            text: 'Next.js is a React framework for building fast and SEO-friendly web applications. It simplifies server-side rendering and offers powerful data fetching capabilities.',
            color: '#ffffff',
        },
        {
            image: 'https://i.imgur.com/23pTXac.png',
            label: 'TypeScript',
            text: 'TypeScript is a statically typed superset of JavaScript that enhances code quality and tooling support. It adds static typing, interfaces, classes, and modules, enabling developers to write more robust and maintainable code.',
            color: '#2D79C7',
        },
        {
            image: 'https://i.imgur.com/QFlsgUe.png',
            label: 'Tailwind',
            text: 'Tailwind CSS is an innovative and highly regarded technology due to its adoption of a utility-first approach. This CSS framework provides an extensive array of versatile and reusable utility classes, enabling developers to effortlessly style their websites or applications.',
            color: '#ffffff',
        }
    ]

    return (
        <div
            className={s.technologies}
        >
            <h1
                className="flex justify-center items-center text-3xl md:text-6xl font-bold mb-10 space-x-2">
                Technologies &nbsp;
                <span className='text-gray-300 relative left-30'>I use</span>
            </h1>
            <Swiper
                modules={[Navigation, EffectCards]}
                effect='cards'
                slidesPerView={1}
                navigation
                className='min-h-[30rem] min-w-[0px] max-w-[50vw]'
            // className='text-black flex justify-center ml-[50%] min-w-[0px] max-h-[90vw] h-full  max-w-[90vw] md:max-w-[800px] m-0'
            >
                {
                    technologies.map(({
                        image, label, text, color
                    }) =>
                        <SwiperSlide>
                            <Technology
                                image={image} label={label} text={text} color={color}
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}

export default Technologies
