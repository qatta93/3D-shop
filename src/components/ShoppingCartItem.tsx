import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import furniture from "../../public/api/furnitureDetails.json"


export const ShoppingCartItem = ({product}) => {
  const productDetails = furniture.filter(item => item.id === product.products);

  const getLocalStorageProducts = typeof window !== 'undefined' && window.localStorage.getItem("state");
  const parseLocalStorageProducts = getLocalStorageProducts === undefined || getLocalStorageProducts === null ? 0 : JSON.parse(getLocalStorageProducts);

  const [localStorageProducts, setLocalStorageProducts] = useState(parseLocalStorageProducts)

  const deleteProduct = (id:string) => {
    const updateLocalStorage = parseLocalStorageProducts.filter(p => p.products !== id)
    return setLocalStorageProducts(updateLocalStorage)
  }

  useEffect(() => {
    // localStorage.setItem('state', localStorageProducts)
  }, [localStorage])

  console.log(localStorage)


  return (
    <article className='flex justify-between rounded-lg shadow-xl shadow-slate-200 w-full py-3 pr-2 sm:p-3 text-center mt-3 mb-8 border-solid border-[1px] border-indigo-50 text-slate-400 font-medium'>
      <Image src={productDetails[0].img} alt="product" height={160} width={200}/>
      <section className='flex flex-col justify-center'>
        <h1 className='text-md sm:text-xl font-bold'>{productDetails[0].name}</h1>
        <p className='font-light'>Color: {productDetails[0].color}</p>
        <p className='font-light'>Price: {productDetails[0].price}</p>
        <p className='font-light'>Quantity:</p>
        <div>
          <button className='rounded-lg shadow-xl shadow-slate-200 text-center border-solid border-[1px] border-indigo-50 text-slate-400 font-medium mt-2  mx-2 px-3'>-</button>
          1
          <button className='rounded-lg shadow-xl shadow-slate-200 text-center border-solid border-[1px] border-indigo-50 text-slate-400 font-medium mt-2 mx-2 px-3'>+</button>
        </div>
      </section>
      <div className='py-12'>
       <Image src='/images/bin.png' alt="delete" height={50} width={40} className='cursor-pointer py-64 opacity-70' onClick={() => deleteProduct(productDetails[0].id)}/>
      </div>
    </article>
  )
}
