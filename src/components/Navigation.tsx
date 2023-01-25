import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Navigation = () => {
  return (
    <section className='p-2'>
      <Link href="/" >
        <div className='flex'>
          <Image src="/images/arrow.png" alt="arrow" height={8} width={25}  className='cursor-pointer'/>
          <p className='cursor-pointer'>HOME</p>
        </div>
      </Link>
  </section>
  )
}
