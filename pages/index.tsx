import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'
import { ItemCard } from '../src/components/ItemCard'
import { FurnitureProps } from '@/components/types';
import { gsap } from "gsap";


const Home: NextPage = () => {
  const [showGif, setShowGif] = useState<boolean>(true);
  const [showText, setShowText] = useState<boolean>(false);

  const bcgRef = useRef();
  const textRef = useRef();


  useEffect(() => {
    setTimeout(function() {
      gsap.from(bcgRef.current, 1, {x: -640})
      gsap.to(bcgRef.current, 0.85, {x: 0, repeat: 0})
      setShowGif(false)
      setShowText(true)
    }, 6000)
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
            {/* <header className='h-auto w-screen text-center text-black relative my-2'>
              <p className='absolute w-full py-2.5 bottom-0 inset-x-0 bg-blue-400 text-white text-xs text-center leading-4'>3D FURNITURE</p>
              <h2 className='absolute italic text-2xl top-40'>Find your perfect match!</h2>
              <img src="images/interior2.png" alt="interior" className='w-full absolute top-2'/>
              <img src="images/bcg_black.png" alt="interior" className='w-full absolute inset-0 top-2 opacity-30 ' ref={bcgRef}/>
               {showGif && <img src="images/interior.gif" alt="interior" className='w-screen absolute top-28 '/>}
            </header> */}
            <div className="relative w-screen h-42 overflow-hidden text-white text-center">
              <img src="images/interior_bcg.png" alt="Avatar" className="object-cover w-full h-full opacity-30" />
              {showGif && <img src="images/interior.gif" alt="interior" className='w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '/>}
              {!showGif && <img src="images/interior_static.png" alt="interior" className='w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '/>}
              {!showGif && <img src="images/interior_bcg_slide.png" alt="interior" className='w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-70' ref={bcgRef}/>}
              {showText &&
                <div className='absolute align-middle w-full inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 my-10' ref={textRef}>
                  <h1 className="w-full py-2.5 inset-x-0 text-2xl leading-4">3D FURNITURE</h1>
                  <h2 className='w-full italic text-2xl'>Find your perfect match!</h2>
                </div>
              }
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