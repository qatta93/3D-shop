import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

export const DesktopNav = () => {
  return (
    <div className='flex text-xl lg:text-2xl'>
      <Link href='/'><a className='my-auto'>home</a></Link>
      <Link href='/products'><a className='mx-10 lg:mx-14 my-auto'>products</a></Link>
      <Link href='/' className=""><a className='mr-10 lg:mr-14 my-auto'>login</a></Link>
      <Link href='/cart'>
        <div className='relative h-[30px] w-[30px] lg:h-[37px] lg:w-[37px]'>
          <Image src="/images/cart.png" alt="cart" layout='fill' className="absolute"/>
        </div>
      </Link>
    </div>
  )
}
