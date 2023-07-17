'use client';

import React from 'react'
import GlobalSvgSelector from '@/public/svg/GlobalSvgSelector';
import gsap from 'gsap'
import { useRef, useEffect } from 'react'

interface UpButtonProps {
    className?: string
}

const UpButton: React.FC<UpButtonProps> = ({ className }) => {
  
  const ButtonRef = useRef(null)
  useEffect(() => {
    const el = ButtonRef.current
    gsap.fromTo(el, {x: '50'}, {x: 0, duration: .5})
  }, [])
  

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) 
  }
  
    return (
    <button ref={ButtonRef} className={className} onClick={handleClick}>
        {/* <GlobalSvgSelector className='z-60' id={'up_arrow'}/> */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
        </svg>


    </button>
  )
}

export default UpButton
