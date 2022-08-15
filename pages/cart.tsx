import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCartItem } from '@/components/shoppingCartItem'
import { generateUUID } from 'three/src/math/MathUtils'

const Cart: NextPage = () => {

  const getLocalStorageProducts = typeof window !== 'undefined' && window.localStorage.getItem("state");
  const parseLocalStorageProducts = getLocalStorageProducts === undefined || getLocalStorageProducts === null ? 0 : JSON.parse(getLocalStorageProducts);

  return (
    <main>
      <section className='p-2'>
        <Link href="/" >
          <div className='flex'>
            <Image src="/images/arrow.png" alt="arrow" height={8} width={25}  className='cursor-pointer'/>
            <p className='cursor-pointer'>HOME</p>
          </div>
        </Link>
      </section>
      <h1 className='bg-emerald-200 py-4 text-center text-zinc-600 font-semibold uppercase text-lg'>CART</h1>
      <section className='pt-12 h-full w-full flex flex-col xl:flex-row xl:flex-wrap justify-center items-center'>
        <section className="w-screen pb-20">
          <div className="flex justify-center content-center my-12">
            <Image src='/images/trolley.png' width={150} height={150}/>
          </div>
          <article className="w-full sm:w-[500px] lg:w-[650px] bg-white border-solid border-2 border-indigo-60 mx-auto py-12 sm:px-4">
            <p className="text-center mb-4 text-slate-400 text-xl">Your shopping cart:</p>
            <p className="border-b-2 border-indigo-60 leading-[2px] text-center mb-6"></p>
            <div className="flex flex-col pt-6">
              {parseLocalStorageProducts.length > 0 && parseLocalStorageProducts.map(product => <ShoppingCartItem key={generateUUID()} product={product}/>)}
            </div>
          </article>
        </section>
      </section>
    </main>
  )
}

export default Cart;
