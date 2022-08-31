import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import furniture from "../../public/api/furnitureDetails.json"
import { Context } from "../../context/AppContext";
import { getProducts, deleteProductDatabase } from './helpers/crud';
import { useSession } from 'next-auth/react';

export const ShoppingCartItem = ({product}) => {
  const { data: session } = useSession();
  const productDetails = furniture.filter(item => item.id === product.products);

  //@ts-ignore
  const { state, dispatch } = useContext(Context);

  const filterProducts = state.filter(item => item.products === productDetails[0].id)[0];
  const findQuantity = filterProducts !== undefined && filterProducts.quantity;

  const [productsDatabase, setProductsDatabase] = useState([])

  console.log(productsDatabase)

  const filterProductsDatabase = productsDatabase.filter(item => item.products === productDetails[0].id)[0];
  const findQuantityDatabase = filterProductsDatabase !== undefined && filterProductsDatabase.quantity;

  useEffect(() => {
    getProducts(setProductsDatabase)
  },[])
  
  const deleteProduct = () => {
    if(session){
      const productToDelete = productsDatabase.filter(item => item.products === productDetails[0].id)[0].id
      deleteProductDatabase(productToDelete)
      return;
    }
    dispatch({
      type: "DELETE_PRODUCT_FROM_CART",
      payload: productDetails[0].id,
    })
  }

  const addProduct = () => {
    if(session){
      // const productToUpdate = productsDatabase.filter(item => item.products === productDetails[0].id)[0].id
      // addQuantity(productToUpdate)
      return;
    }
    dispatch({
      type: "ADD_PRODUCT_QUANTITY",
      payload: productDetails[0].id,
      payloadQuantity: findQuantity,
    })
  }

  const subtractProduct = () => {
    if(findQuantity > 0) {
      dispatch({
        type: "SUBTRACT_PRODUCT_QUANTITY",
        payload: productDetails[0].id,
        payloadQuantity: findQuantity,
      })
    }
  }

  return (
    <article className='flex justify-between rounded-lg shadow-xl shadow-slate-200 w-full py-3 pr-2 sm:p-3 text-center mt-3 mb-8 border-solid border-[1px] border-indigo-50 text-slate-400 font-medium md:pr-8'>
      <Image src={productDetails[0].img} alt="product" height={160} width={200}/>
      <section className='flex flex-col justify-center'>
        <h1 className='text-md sm:text-xl font-bold'>{productDetails[0].name}</h1>
        <p className='font-light text-sm sm:text-md'>Color: {productDetails[0].color}</p>
        <p className='font-light text-sm sm:text-md'>Price: {productDetails[0].price}</p>
        <p className='font-light text-sm sm:text-md'>Quantity:</p>
        <div>
          <button className='rounded-lg shadow-xl shadow-slate-200 text-center border-solid border-[1px] border-indigo-50 text-slate-400 font-medium mt-2 mx-1 sm:mx-2 px-2 sm:px-3' onClick={() => subtractProduct()}>-</button>
          {!session && findQuantity}
          {session && findQuantityDatabase}
          <button className='rounded-lg shadow-xl shadow-slate-200 text-center border-solid border-[1px] border-indigo-50 text-slate-400 font-medium mt-2 mx-1 sm:mx-2 px-2 sm:px-3' onClick={() => addProduct()}>+</button>
        </div>
      </section>
      <div className='py-12'>
       <Image src='/images/bin.png' alt="delete" height={45} width={37} className='cursor-pointer py-64 opacity-70' onClick={() => deleteProduct()}/>
      </div>
    </article>
  )
}
