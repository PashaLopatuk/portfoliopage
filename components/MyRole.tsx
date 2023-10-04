'use client';

import React, { useEffect, useRef} from 'react'
import s from './styles/RoleShadow.module.scss'

interface MyRoleProps {
  className ?: string
}

const MyRole: React.FC<MyRoleProps> = ({ className }) => {

  
  const myRoles: string[] = [
    'developer', 'templater', 'designer'
  ]
  
  const [roleNow, setRoleNow] = React.useState<number>(0)

  useEffect(() => {
    const timer = setInterval( () => {
      setRoleNow( (prev) => (prev + 1) % myRoles.length )
    }, 3000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const RoleSpanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (RoleSpanRef.current) {
      RoleSpanRef.current.innerHTML = myRoles[roleNow]
    }
  }, [roleNow])

  return (
    <span ref={RoleSpanRef} className={s.Role}> 
        {/* {
          myRoles.at(Math.random() * 3)
        } */}

        {/* <span className="bg-lime-300 text-xs mt-7 w-[160px] max-h-[7px] blur-lg absolute">gggggggg</span> */}

        developer
    </span>
  )
}

export default MyRole