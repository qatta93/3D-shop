import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';
import useDeviceSize from '../hooks/useDeviceSize';
import { MobileNavProps } from '../types';

export const Navbar = ({openMenu, setOpenMenu}:MobileNavProps) => {
  const [deviceWidth] = useDeviceSize();
  const { data: session } = useSession();

  return (
    <nav className='h-[70px] sm:h-[100px] w-full flex justify-between bg-primary-light p-[20px] sm:py-[35px] sm:px-6 lg:px-[124px]'>
      <section className='flex'>
        <div className='relative h-[30px] w-[30px] lg:h-[37px] lg:w-[37px]'>
          <Image src="/images/logo.png" alt="logo"  layout='fill' className="absolute"/>
        </div>
        <title className='font-michroma pl-2.5 leading-7 text-[24px] lg:text-[31px]'>SHOPILY</title>
      </section>
      <section>
        {deviceWidth > 600 ? <DesktopNav session={session} signIn={signIn} signOut={signOut}/> : <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu}/>}
      </section>
    </nav>
  )
}

export default Navbar;