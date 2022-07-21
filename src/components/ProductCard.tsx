import React, { useState } from 'react'
import Lights from './Lights';
import Model from './Model';
import { Canvas } from '@react-three/fiber';

export const ProductCard = (item) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div className="w-full mb-12 border-1 bg-white border-indigo-600 shadow-xl md:w-[600px] xl:w-[500px] xl:mx-12 md:rounded-xl cursor-pointer" onClick={() => setShowDetails(!showDetails)}>
      <section className='pt-10 relative w-full h-full'>
        <Canvas camera={{ position: [0, 0, 300]}} > 
          <Lights />
          <Model id={item.item.id} item={item.item}/>
        </Canvas>
        <img src="/images/loupe.png" alt="loupe" className='opacity-30 w-12 absolute bottom-4 right-4' />
      </section>
      <section className="px-6 py-6 bg-slate-200 md:rounded-b-xl">
        <div className='flex'>
          <h3 className="text-xl text-gray-700 flex-1 font-semibold uppercase">{item.item.name}</h3>
          <p className="text-xl text-gray-900">{item.item.price}</p>
        </div>
        {showDetails &&
          <section className='pt-4'>
            <div className='flex justify-between'>
              <p className='font-semibold'>Colors:</p>
              <p>{item.item.color}</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-semibold'>Details:</p>
              <p>{item.item.description}</p>
            </div>
          </section>
        }
      </section>
    </div>
  )
}
