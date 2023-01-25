import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { gsap } from "gsap";

export const Animation = () => {
  const [showGif, setShowGif] = useState<boolean>(true);
  
  const bcgRef = useRef();
  const bcgDarkRef = useRef();
  const textRef = useRef();
  
  useEffect(() => {

    const tl = gsap.timeline({delay: 7.6, duration: .4});
      tl.from(textRef.current, {opacity: 0, y: 150, duration: .3});
      tl.to(textRef.current, {opacity: 1, y: 0});

    const tl2 = gsap.timeline({delay: 6.3});
      tl2.from(bcgRef.current, {opacity: 0, x: -640, y:0});
      tl2.to(bcgRef.current, {opacity: .9, x: 0, duration: .4});

    const tl3 = gsap.timeline({delay: 7});
      tl3.from(bcgDarkRef.current, {opacity: 0});
      tl3.to(bcgDarkRef.current, {opacity: .3, duration: 1});

    setTimeout(function() {
      setShowGif(false)
    }, 6200)
  }, [])

  return (
    <section className='w-screen h-[480px] sm:h-[650px] md:h-[870px] lg:h-[500px] xl:h-[620px] flex drop-shadow-lg'>
      <div className="relative w-screen overflow-hidden text-slate-800 text-center">
        <img src="images/interior_bcg.png" alt="Avatar" className="absolute object-cover w-full h-full opacity-10" />
        <img src="images/hexagon2.jpg" alt="Avatar" className="absolute object-cover w-full h-full opacity-40" />
        <img src="images/interior_bcg.png" alt="Avatar" className="absolute object-cover w-full h-full z-1 opacity-0" ref={bcgDarkRef}/>
        {showGif && <img src="images/interior.gif" alt="interior" className='w-screen lg:w-3/5 lg:h-full absolute shadow-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'/>}
        <img src="images/interior_static.png" alt="interior" className='w-screen lg:w-3/5 lg:h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '/>
        <img src="images/interior_bcg_slide.png" alt="interior" className='w-screen lg:w-3/5 lg:h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0' ref={bcgRef}/>
          <div className='absolute align-middle w-full inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 my-10' ref={textRef}>
            <h1 className="w-full py-2.5 sm:pt-10 md:pt-24 lg:pt-0 xl:pt-6 xl:text-4xl inset-x-0 text-3xl leading-4 font-extrabold">3D FURNITURE</h1>
            <h2 className='w-full pt-3 italic text-2xl font-semibold'>Find your perfect match!</h2>
          </div>
      </div>
    </section>
  )
}
