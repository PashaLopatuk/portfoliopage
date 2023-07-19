'use client';

import React, { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import gsap from 'gsap' 
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger)

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards'


import Technology from './Technology';
import { Navigation, EffectCards } from 'swiper/modules';

interface TechnologiesProps {
    className?: string
}

const Technologies: React.FC<TechnologiesProps> = ({className}) => {
  
    const TechnologiesRef = useRef(null)
    
    useEffect(() => {
        const el = TechnologiesRef.current
        gsap.fromTo(el, {color: 'black', opacity: '0%'}, {color: 'white', opacity: '100%',  duration: 2, scrollTrigger: {
            trigger: el,
            scrub: 1,
        }})
    }, [])


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
        text: 'Tailwind CSS is an innovative and highly regarded technology due to its adoption of a utility-first approach. This CSS framework provides an extensive array of versatile and reusable utility classes, enabling developers to effortlessly style their websites or applications. By eliminating the necessity for hand-crafting custom CSS, Tailwind CSS enhances development efficiency, significantly accelerates the process, and boosts overall productivity.',
        color: '#ffffff',
    }
]
  
    return (
        <div 
        ref={TechnologiesRef}
        >
    <h1 
    className="flex justify-center text-3xl md:text-6xl font-bold mb-10 space-x-2">
        Technologies &nbsp;
        <span className='text-gray-300 relative left-30'>I use</span>
    </h1>
    <Swiper
    modules={[ Navigation, EffectCards ]}
    effect='cards'
    slidesPerView={1}
    navigation
    className={className+ 'text-black'}
    
    >
        {
            technologies.map(({
                image, label, text, color
            }) => 
            <SwiperSlide>
                <Technology className={
                    'md:max-w-[500px]  md:max-h-full w-full h-full max-w-[90%]   text-gray-800 '}
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
