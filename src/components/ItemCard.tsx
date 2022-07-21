import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'

export const ItemCard = (item) => {
  const router = useRouter();
  const { products } = router.query;

  return (
    <Link href={item.item.name}>
      <div className="w-full hover:opacity-50 mb-12 md:mb-20 border-1 bg-white border-indigo-600 shadow-xl md:w-[600px] xl:w-[500px] xl:mx-12 md:rounded-xl cursor-pointer">
          <div className="w-full h-96 md:h-[500px] flex justify-center">
            <img className='sm:w-[370px] md:w-[450px]' src={item.item.img}/>
          </div>
          <div className="px-6 py-6 bg-slate-200 flex md:rounded-b-xl">
            <h3 className="text-xl text-gray-700 flex-1 font-semibold uppercase">{item.item.name}</h3>
            <p className="text-xl text-gray-900">from  {item.item.price}</p>
          </div>
      </div>
    </Link>
  )
}
