import s from './styles/MyMedias.module.scss'
import React from 'react'

const MyMedias = () => {

  return <div className={s.MyMedias}>
    <h1
   
   className="text-right md:text-center text-7xl md:text-[7em] mr-[-11px] font-semibold"
   >
       Check out <span className="text-lime-500">my</span> media's
   </h1>
  </div>

}

export default MyMedias
