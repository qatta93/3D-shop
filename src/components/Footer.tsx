import React from 'react'

export const Footer = () => {
  return (
    <section className='body-font font-adelia italic py-6 text-slate-400 justify-center flex md:text-lg bg-white'>
      <p>Coded with passion</p>

      <p>by</p>
      <a href="https://patrycja.info" className='font-bold underline underline-offset-1 decoration-solid mx-2'>Qatta</a>
      <p>@{(new Date().getFullYear())}</p>
    </section>
  )
}
