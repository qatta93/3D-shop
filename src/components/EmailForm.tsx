import React from 'react'

export const EmailForm = (csrfToken) => {
  
  return (
    <form method="post" action="/api/auth/signin/email" className='w-full px-4 text-slate-800'>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <input type="email" id="email" name="email" placeholder='Email address' className='shadow-inner text-slate-500 w-full p-3 text-center border-solid border-[1px] border-indigo-50'/>
      {/* <input type="password" id="password" name="password" placeholder='Password' className='shadow-inner text-slate-500 w-full p-3 text-center border-solid border-[1px] border-indigo-50 mt-2'/> */}
      <button type="submit" className='shadow-xl shadow-slate-200 w-full p-3 text-center mt-3 mb-8 border-solid border-[1px] border-indigo-50 text-slate-500'>SIGN IN</button>
    </form>
  )
}