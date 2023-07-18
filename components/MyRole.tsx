'use client';

import React, { useEffect, useRef} from 'react'
import { gsap } from 'gsap'


interface MyRoleProps {
  className ?: string
}

const MyRole: React.FC<MyRoleProps> = ({ className }) => {

  
  const myRoles: string[] = [
    'developer', 'templater',
  ]
  

  const RoleSpanRef = useRef(null);

  useEffect(() => {
    const el = RoleSpanRef.current
    gsap.to(el, {
      duration: 3,
      text: {
        value: 'developer',
        delimiter: ' ',
      },
      repeat: -1,
      yoyo: true,
    })
  }, [])

  return (
    <span ref={RoleSpanRef} className={`${className}`}> 
        {/* {
          myRoles.at(Math.random() * 3)
        } */}

        <span className="bg-lime-300 text-xs mt-7 w-[160px] max-h-[7px] blur-lg absolute">gggggggg</span>

        developer
    </span>
  )
}

export default MyRole