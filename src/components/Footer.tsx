import React from 'react'

export const Footer = () => {
  return (
    <section className='h-[50px] font-cormorant justify-center flex font-light italic text-lg bg-white'>
      <a href="https://patrycja.info" target="_blank" className='cursor-pointer my-auto'>Coded with passion by Qatta @{(new Date().getFullYear())}</a>
    </section>
  )
}
