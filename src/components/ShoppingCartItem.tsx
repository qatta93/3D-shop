import React from 'react'
import Image from 'next/image'
import furniture from "../../public/api/furnitureDetails.json"


export const ShoppingCartItem = ({product}) => {
  const productDetails = furniture.filter(item => item.id === product.products);
  console.log(productDetails)
  console.log(product.products)
  return (
    <article className='flex justify-between rounded-lg shadow-xl shadow-slate-200 w-full py-3 pr-2 sm:p-3 text-center mt-3 mb-8 border-solid border-[1px] border-indigo-50 text-slate-400 font-medium'>
      <Image src={productDetails[0].img} alt="product" height={160} width={200}/>
      <section className='flex flex-col justify-center'>
        <h1 className='text-md sm:text-xl font-bold'>{productDetails[0].name}</h1>
        <p className='font-light'>Color: {productDetails[0].color}</p>
        <p className='font-light'>Quantity:</p>
        <div>
          <button className='rounded-lg shadow-xl shadow-slate-200 text-center border-solid border-[1px] border-indigo-50 text-slate-400 font-medium mt-2  mx-2 px-3'>-</button>
          1
          <button className='rounded-lg shadow-xl shadow-slate-200 text-center border-solid border-[1px] border-indigo-50 text-slate-400 font-medium mt-2 mx-2 px-3'>+</button>
        </div>
      </section>
      <div className='py-12'>
       <Image src='/images/bin.png' alt="delete" height={50} width={40} className='cursor-pointer py-64 opacity-70'/>
      </div>
    </article>
  )
}
