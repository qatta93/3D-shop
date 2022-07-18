import React from 'react'

export const Footer = () => {
  return (
    <div className='body-font font-adelia italic py-6 text-slate-400 justify-center flex'>
      <p>Coded with passion</p>
      <img src="/images/heart.png" alt="heart" className='h-4 mt-1 mx-1'/>
      <p>by</p>
      <a href="https://patrycja.info" className='font-bold underline underline-offset-1 decoration-solid mx-2'>Qatta</a>
      <p>@{(new Date().getFullYear())}</p>
    </div>
  )
}
