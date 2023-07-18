'use client';
import { twMerge } from 'tailwind-merge';

import React from 'react'

interface BackgroundCirclesProps {
    className?: string

}

const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({ className }) => {
  
  const words = [
    'developer',
    'div',
    'className',
    'Typescript',
    'front-end',
    'dev',
    'html',
    'tailwind',
    'css'
  ]
  
  return (
    <div className={`${className} bg-gray-900 z-[100] fixed w-full h-full left-0 top-0 `}>
      
    {
      words.map( (e) => 
        <div className={twMerge(
          'text-[', String(Math.floor(Math.random() * 10) * 30), 'px] absolute left-[', String(Math.floor(Math.random() * 100)), '%]top-[', String(Math.floor(Math.random() * 100)), '%]')} >
          { e }
        </div>
      )
    }
        
    </div>
  )
}

export default BackgroundCircles
