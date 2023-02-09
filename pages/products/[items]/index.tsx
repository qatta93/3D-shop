import { NextPage } from 'next'
import React from 'react'
import { useRouter } from 'next/router';
import furnitureDetails from '../../../public/api/itemsDetails.json';
import { FurnitureDetailsProps } from '../../../src/components/types/index'

const Products: NextPage = () => {
  const router = useRouter();
  const { products } = router.query;

  return (
    <main>
      <h1 className='bg-emerald-200 py-4 text-center text-zinc-600 font-semibold uppercase text-lg'>{products}</h1>
      <section className='pt-12 h-full w-full flex flex-col xl:flex-row xl:flex-wrap justify-center items-center lg:pb-20'>

      </section>
    </main>
  )
}

export default Products;
