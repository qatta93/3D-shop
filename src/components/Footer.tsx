import React from 'react'

export const Footer = () => {
  return (
    <footer className='h-[50px] w-full font-cormorant justify-center flex font-light italic text-lg bg-white'>
      <a href="https://patrycja.info" target="_blank" rel="noreferrer" className='cursor-pointer my-auto'>Coded with passion by Qatta @{(new Date().getFullYear())}</a>
    </footer>
  )
}
