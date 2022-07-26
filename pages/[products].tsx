import Lights from '../src/components/Lights';
import Model from '../src/components/Model';
import { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router';
import furnitureDetails from '../public/api/furnitureDetails.json';
import { ProductCard } from '@/components/ProductCard';
import Link from 'next/link'

const Products: NextPage = () => {
  const router = useRouter();
  const { products } = router.query;

  return (
    <main>
      <section className='p-2'>
        <Link href="/" >
          <div className='flex'>
            <img src="images/arrow.png" alt="arrow"  className='h-5 mt-[3px] cursor-pointer'/>
            <p className='cursor-pointer'>HOME</p>
          </div>
        </Link>
      </section>
      <h1 className='bg-emerald-200 py-4 text-center text-zinc-600 font-semibold uppercase text-lg'>{products}</h1>
      <section className='pt-12 h-full w-full flex flex-col xl:flex-row xl:flex-wrap justify-center items-center'>
        {furnitureDetails.map(item => item.type === products && <ProductCard key={item.id} item={item}/>)}
      </section>
      <div className="sketchfab-embed-wrapper"> <iframe title="Comfy Chair" frameBorder="0" allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/763c5061112d4432addd898b5f4a17ae/embed"> </iframe></div>
    </main>
  )
}

export default Products;
