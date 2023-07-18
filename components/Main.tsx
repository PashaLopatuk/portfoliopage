import React from 'react'
// import myPhoto from '../public/pictures/Me.jpg'
// const myPhoto = require('../public/pictures/Me.jpg')
import MyMainPhoto from './MyMainPhoto'
import MyRole from './MyRole'
import GlobalSvgSelector  from '@/public/svg/GlobalSvgSelector'
import Technologies from './Technologies'
import UpButton from './UpButton'
// import BackgroundCircles from './BackgroundCircles'
import WelcomeMessage from './WelcomeMessage'
import ParallaxLimes from './ParallaxLimes'
import MyMedias from './MyMedias'

const Main = () => {

  const myRoles: string[] = [
      'developer', 'templater',
  ]
  
  const photos: string[] = [
      'https://i.imgur.com/zfkGMSt.jpg',
      'https://i.imgur.com/krS4pSk.jpg',
      'https://i.imgur.com/fBwocNh.jpg',
  ]


  return (
    <div className='z-20 grow shrink-0 p-3 w-full max-w-100 lg:max-w-[1024px]'>
        
        {/* <BackgroundCircles className={''}/> */}
        <UpButton className='hover:text-black z-20 transition fixed right-5 z-50 bottom-10 p-4 bg-lime-500 rounded-full text-black'/>
        
        <section className="z-20 bg-black pt-6 rounded-2xl">
            <div className="flex gap-[30px] mx-[20px]">
                <div className="flex flex-col">
                    <MyMainPhoto photos={photos}/>
                    <nav className=""></nav>
                </div>
                
                <div className="flex flex-col my-10 w-full">
                    <div className="">
                        <WelcomeMessage />
                            <h1 className='text-[40px] font-bold '>I'm Pavlo Lopatiuk</h1>
                            <h1 className='text-[40px] font-bold mt-[-15px]'>I am <MyRole className="text-lime-500" />
                        </h1>
                    </div>
                    <div className="h-[1px] bg-gray-600 w-90 m-4"></div>
                    <div className="h-full">
                        <ul className="flex flex-col justify-between h-full">
                            <li className="" title='My birth date'>
                                <a href="https://en.wikipedia.org/wiki/Portal:Current_events/2005_July_11" 
                                className="flex gap-2 items-center w-fit  transition rounded-xl p-2 hover:bg-gray-600">
                                    <GlobalSvgSelector id='calendar' className='text-black bg-lime-500 p-1 rounded-full max-h-[20px] max-w-[20px]'/>
                                    11 July 2005</a>
                            </li>
                            <li className="" title='Phone number'>
                                <a href="tel:+380936990092" 
                                className="flex gap-2 items-center w-fit  transition rounded-xl p-2 hover:bg-gray-600"> 
                                <GlobalSvgSelector className='text-black bg-lime-500 p-1 rounded-full max-h-[20px] max-w-[20px]' id='phone' />
                                Call me</a>
                            </li>
                            <li className="" title='Write me'>
                                <a href="email:pashalopatuk@gmail.com" 
                                className="flex gap-2 items-center w-fit  transition rounded-xl p-2 hover:bg-gray-600">
                                <GlobalSvgSelector className='text-black bg-lime-500 p-1 rounded-full max-h-[20px] max-w-[20px]' id='email'/>    
                                My email</a>
                            </li>
                            <li className="" title='My location'>
                                <a href="https://www.google.com.ua/maps/place/Lutsk,+Volyn+Oblast/@50.7398921,25.1691999,11z/data=!3m1!4b1!4m6!3m5!1s0x472599eba185965d:0xd25274a2228db86c!8m2!3d50.747233!4d25.325383!16zL20vMDJqejNx?entry=ttu" 
                                className="flex gap-2 items-center w-fit  transition rounded-xl p-2 hover:bg-gray-600">
                                <GlobalSvgSelector id='gps' className='text-black bg-lime-500 p-1 rounded-full max-h-[20px] max-w-[20px]'/>    
                                Lutsk, Ukraine</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-[50px] p-4 text-gray-300 transition hover:text-gray-200">
            As a junior frontend developer studying in Ukraine, I am a passionate and dedicated individual who is eager to learn and grow in the ever-evolving field of web development. Currently pursuing my education at the university, I am equipped with a solid foundation in programming languages, web technologies, and design principles.
           </div>
        </section>
        <section className="py-[20px] my-40  bg-black rounded-3xl flex flex-col items-center gap-10 max-w-95 overflow-hidden">
            
            <Technologies className='min-w-[0px] max-w-[800px] m-0'/>
        </section>
        <section>
            <MyMedias />
            <ParallaxLimes/>
        </section>
    </div>
  )
}

export default Main
