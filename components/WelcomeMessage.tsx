'use client';

import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const WelcomeMessage = () => {
    
    const MessageRef = useRef(null)

    useEffect( () => {
        const el = MessageRef.current;
        animation(el)
        }, [])

    const animation = (el : any) => {
        gsap.fromTo(el, {y: '40', opacity: 0}, { y: 0, opacity: 1, duration: .5 })
    }

    return (
        <h5 
        ref={MessageRef} 
        onClick={() => animation(MessageRef.current)} 
        className='opacity-0 text-s text-gray-200 transition'
        >Hello Everyone ✌️
        </h5>
    )
}

export default WelcomeMessage