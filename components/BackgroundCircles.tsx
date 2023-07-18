'use client';

import React from 'react';

interface BackgroundCirclesProps {
  className?: string;
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
  ];

  return (
    <div className={`${className} bg-gray-900 z-[100] fixed w-full h-full left-0 top-0`}>
      <div className="text-[68px]">GOOGOGO</div>
      {words.map((word) => (
        <div
          key={word}
          className=
          {`
            text-[${Math.floor(Math.random() * 100)}%]
            absolute
            left-[${Math.floor(Math.random() * 100)}vw]
            top-[${Math.floor(Math.random() * 100)}vh]
          `}
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default BackgroundCircles;
