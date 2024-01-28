import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';



const LandingPage = () => {
   const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-[200vh] relative overflow-hidden bg-zinc-900'>
       <img data-scroll data-scroll-speed = {-1.2} className='w-full h-full object-cover opacity-80' src="https://a.storyblok.com/f/133769/2500x2626/63a902ce2b/exo-ape-studio-hero.jpg/m/1920x2017/filters:format(webp):quality(70)" alt="" />
       <div className='contain ml-24 absolute top-[20%] left-0 h-[200vh] w-full '>
        <h1 className='text-[10vw] leading-[9.5vw] tracking-tight font-normal'>Building</h1>
        <h1 className='text-[10vw] leading-[9.5vw] tracking-tight font-normal'>Digital</h1>
        <h1 className='text-[10vw] leading-[9.5vw] tracking-tight font-normal'>Presence</h1>
       </div>
    </div>
  )
}

export default LandingPage;