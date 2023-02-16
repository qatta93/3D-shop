import React from 'react'
import Image from 'next/image';

export const FurnitureTypesCard = ({furniture}) => {

  return (
    <article className='w-full rounded-[10px] shadow-xl bg-white text-center'>
      <div className='relative h-44 w-44 mx-auto'>
        <Image src={furniture.img} alt="furniture" layout='fill'/>
      </div>
      <p className='text-[28px] font-bold mt-[50px]'>{furniture.name}</p>
      <p className='text-[20px] font-light mt-3 pb-4'>from {furniture.price}</p>
    </article>
  )
}

export default FurnitureTypesCard;