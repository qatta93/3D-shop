import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'
import { ItemCard } from '../src/components/ItemCard'
import { FurnitureProps } from '@/components/types';
import { gsap } from "gsap";


const Home: NextPage = () => {
  const [showGif, setShowGif] = useState<boolean>(true);

  const bcgRef = useRef();
  const bcgDarkRef = useRef();
  const textRef = useRef();


  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 0, 
      y: 100, 
      duration: 1
    });
    gsap.to(textRef.current, {
      opacity: 1, 
      y: 0, 
      delay: 7.2
    });
    gsap.from(bcgRef.current, {
      opacity: 0, 
      x: -640, 
      duration: 1
    });
    gsap.to(bcgRef.current, {
      opacity: .9, 
      x: 0, 
      delay: 6.3,
    });
    gsap.from(bcgDarkRef.current, {
      opacity: 0, 
      duration: 3
    });
    gsap.to(bcgDarkRef.current, {
      opacity: .3, 
      delay: 6.2,
    });
    
    setTimeout(function() {
      setShowGif(false)
    }, 6500)
  }, [])


  // add some database 
  const furniture:FurnitureProps[] = [{
    id: 1,
    name: "chairs",
    img: "/images/chair.jpg",
    price: "95$",
  },
  {
    id: 2,
    name: "tables",
    img: "/images/table.jpg",
    price: "185$",
  },
  {
    id: 3,
    name: "lamps",
    img: "/images/lamp.jpg",
    price: "65$",
  },
]

  return (
      <div className='w-screen h-screen'>
        <main className='h-screen relative flex-1'>
          <section className='w-screen h-4/5 flex flex-column pb-12'>
            <div className="relative w-screen h-42 overflow-hidden text-slate-800 text-center">
              <img src="images/interior_bcg.png" alt="Avatar" className="absolute object-cover w-full h-full opacity-10" />
              <img src="images/interior_bcg.png" alt="Avatar" className="absolute object-cover w-full h-full z-1" ref={bcgDarkRef}/>
              {showGif && <img src="images/interior.gif" alt="interior" className='w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '/>}
              {!showGif && <img src="images/interior_static.png" alt="interior" className='w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '/>}
              <img src="images/interior_bcg_slide.png" alt="interior" className='w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' ref={bcgRef}/>
                <div className='absolute align-middle w-full inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 my-10' ref={textRef}>
                  <h1 className="w-full py-2.5 inset-x-0 text-3xl leading-4 font-extrabold">3D FURNITURE</h1>
                  <h2 className='w-full pt-3 italic text-2xl font-semibold'>Find your perfect match!</h2>
                </div>
            </div>
          </section>
          <div>
            <h1 className='text-3xl text-center my-4 text-zinc-600'>Products:</h1>
            {furniture.map(item => <ItemCard key={item.id} item={item}/>)}
          </div>
        </main>

        <footer>

        </footer>
      </div>
  )
}

export default Home