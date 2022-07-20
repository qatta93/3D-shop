import Lights from '../src/components/Lights';
import Model from '../src/components/Model';
import { NextPage } from 'next'
import React from 'react'
import { Canvas } from '@react-three/fiber';
import { useRouter } from 'next/router';
import furnitureDetails from '../public/api/furnitureDetails.json';
import { ProductCard } from '@/components/ProductCard';

const Products: NextPage = () => {
  const router = useRouter();
  const { products } = router.query;

  return (
    <main>
      <section className='p-2'>
        <a href="/" className='flex'>
          <img src="images/arrow.png" alt="arrow"  className='h-5 mt-[3px]'/>
          <p>HOME</p>
        </a>
      </section>
      <h1 className='bg-emerald-200 py-4 text-center text-zinc-600 font-semibold uppercase text-lg'>{products}</h1>
      <section className='py-12 bg-zinc-50'>
        {furnitureDetails.map(item => item.type === products && <ProductCard key={item.id} item={item}/>)}
      </section>
    </main>
  )
}

export default Products;
