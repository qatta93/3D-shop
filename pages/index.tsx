import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'
import { ItemCard } from '../src/components/ItemCard'
import { FurnitureProps } from '@/components/types';


const Home: NextPage = () => {
  const [showGif, setShowGif] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(function() {
      setShowGif(false)
    }, 5500)
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
            <header className='h-auto w-screen text-center text-black relative my-2'>
              <img src="images/interior2.png" alt="interior" className='w-screen absolute inset-0 top-2'/>
              <img src="images/bcg_black.png" alt="interior" className='w-screen absolute inset-0 top-2 opacity-50'/>
               {showGif && <img src="images/interior.gif" alt="interior" className='w-screen absolute top-28'/>}   
              <h1 className='mb-4 text-4xl font-bold'>3D FURNITURE</h1>
              <h2 className='italic text-2xl'>Find your perfect match!</h2>
            </header>
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