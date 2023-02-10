import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { DesktopNavProps } from '../types';
import checkActiveLink from '../helpers/checkActiveLink';


export const DesktopNav = ({session, signIn, signOut}:DesktopNavProps) => {

  return (
    // add gaps to columns
    <div className='flex'>
      <Link href='/'><a className={checkActiveLink('/')}>home</a></Link>
      <Link href='/products'><a className={checkActiveLink('/products')}>products</a></Link>
      {session ?
      // check the endpoint!!
        <button className={checkActiveLink('/auth/signin')} onClick={() => signOut()}>logout</button>
        :
        <button className={checkActiveLink('/auth/signin')} onClick={() => signIn()}>login</button>
      }
      <Link href='/cart'>
        <div className='relative h-[28px] w-[33px] lg:h-[35px] lg:w-[40px] '>
          {/* change the cart icon when the page is active */}
          {checkActiveLink('/cart') === 'activeCart' ?
          <Image src="/images/cart-filled.png" alt="cart" layout='fill' className="absolute ml-16px lg:ml-27px"/>
          :
          <Image src="/images/cart.png" alt="cart" layout='fill' className="absolute ml-16px lg:ml-27px"/>
          }
        </div>
      </Link>
    </div>
  )
}
