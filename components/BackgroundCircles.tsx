import React from 'react'

interface BackgroundCirclesProps {
    className?: string

}

const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({ className }) => {
  return (
    <div className={`${className} bg-black z-0 fixed w-full h-full left-0 top-0 `}>
        
        
    </div>
  )
}

export default BackgroundCircles
