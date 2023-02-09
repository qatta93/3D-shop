import React from 'react'
import Image from 'next/image';
import { MobileNavProps } from '../types';

export const MobileNav = ({openMenu, setOpenMenu}:MobileNavProps) => {
  return (
    <div>
      {openMenu ? 
      <Image src="/images/close.png" alt="close"  height={25} width={25} onClick={() => setOpenMenu(!openMenu)}/>
      :
      <Image src="/images/menu.png" alt="menu"  height={25} width={35} onClick={() => setOpenMenu(!openMenu)}/>}
    </div>
  )
}
