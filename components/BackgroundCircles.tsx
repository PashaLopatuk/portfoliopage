'use client';

import React from 'react';
const limeFront = 'https://i.imgur.com/wWvJL1I.png';
const limeBack = 'https://i.imgur.com/Bu0Tfsv.png';

interface BackgroundCirclesProps {
  className?: string;
}

const BackgroundCircles: React.FC<BackgroundCirclesProps> = ({ className }) => {
  // const words = [
  //   'developer',
  //   'div',
  //   'className',
  //   'Typescript',
  //   'front-end',
  //   'dev',
  //   'html',
  //   'tailwind',
  //   'css'
  // ];
  
  // const margins = [
  //   1, 1, 1, 1, 1, 1,
  // ].map( () => {
  //   Math.floor(Math.random() * 100)
  // })
  // console.log(margins)

  return (
    <div className="fixed blur-3xl">
      <img src="https://i.imgur.com/IyqCmlh.gif" alt="" 
      className='object-cover min-w-[100vw] h-full blur-3xl '
      />

      <img src="https://i.imgur.com/IyqCmlh.gif" alt="" 
      className='object-cover min-w-[100vw] h-full blur-3xl '
      />
    </div>

    // <div className={`${className} bg-gray-900 z-[100] fixed w-full h-full left-0 top-0`}>
    //   {
    //     margins.map( ( e ) => 
    //       <img src={
    //         Math.round(Math.random()) ? limeFront : limeBack
    //       } alt="" className={`max-w-[${e}px] max-h-[${e}px] absolute left-${e}`}/>
    //     )
    //   }
      


      /* <img src={
            Math.round(Math.random()) ? limeFront : limeBack
          } alt="" className={`max-w-[${50}px] max-h-[${50}px]`}/> */
    // </div>
  );
};

export default BackgroundCircles;
