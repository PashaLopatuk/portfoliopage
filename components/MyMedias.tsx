'use client';

import React, { useEffect, useRef} from 'react'
import { gsap } from 'gsap'



const MyMedias = () => {

    const MyMediaRef = useRef(null);

    useEffect(() => {
      const el = MyMediaRef.current
      gsap.fromTo(el, {width: '0%'}, {width: '100%', scrollTrigger: {
        trigger: el,
        // scrub: 1,
    }})
  }, [])

  return (
    <>
        <h1 
        ref={MyMediaRef}
        className="text-right md:text-center text-7xl md:text-[7em] mr-[-11px] font-semibold">
            Check out <span className="text-lime-500">my</span> media's
        </h1>
    </>
  )
}

export default MyMedias
