import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


const Register = () => {

  const [authState, setAuthState] = useState({
    email: '',
    password: ''
  })

  const handleFieldChange = (e) => {
    setAuthState(old => ({ ...old, [e.target.id]: e.target.value }))
  }

  return (
    <>
    <section className='p-2'>
      <Link href="/" >
        <div className='flex'>
          <Image src="/images/arrow.png" alt="arrow" height={8} width={25}  className='cursor-pointer'/>
          <p className='cursor-pointer'>HOME</p>
        </div>
      </Link>
    </section>
    <h1 className='bg-emerald-200 py-4 text-center text-zinc-600 font-semibold uppercase text-lg'>register</h1>
    <section className="w-screen pb-20">
      <div className="flex justify-center content-center my-12">
        <Image src='/images/signin.png' width={150} height={150}/>
      </div>
      <article className="w-72 sm:w-96 lg:w-[450px] bg-white border-solid border-2 border-indigo-60 mx-auto py-12 px-4">
        <form className='w-full px-4 text-slate-800'>
          <input type="text" id="name" name="name" placeholder='Name *' onChange={handleFieldChange} className='shadow-inner text-slate-300 w-full p-3 text-center border-solid border-[1px] border-indigo-50 font-light'/>
          <input type="email" id="email" name="email" placeholder='Email address *' onChange={handleFieldChange} className='shadow-inner text-slate-300 w-full p-3 mt-2 text-center border-solid border-[1px] border-indigo-50 font-light'/>
          <input type="password" id="password" name="password" placeholder='Password *' onChange={handleFieldChange} className='shadow-inner text-slate-300 w-full p-3 text-center border-solid border-[1px] border-indigo-50 mt-2 font-light'/>
          <input type="password" id="password" name="password" placeholder='Repeat password *' onChange={handleFieldChange} className='shadow-inner text-slate-300 w-full p-3 text-center border-solid border-[1px] border-indigo-50 mt-2 font-light'/>
          <button type="submit" className='shadow-xl shadow-slate-200 w-full p-3 text-center mt-3 mb-8 border-solid border-[1px] border-indigo-50 text-slate-500 font-medium'>REGISTER</button>
          {/* {pageState.error !== '' && <p className='text-rose-700 text-center mb-8'>{pageState.error}</p>} */}
        </form>

      </article>
    </section>
    </>
  )
}

export default Register;


// export async function getServerSideProps(context) {
//   const { req } = context;
//   const session = await getSession({ req });

//   if (session) {
//     return {
//       redirect: { destination: "/" },
//     };
//   }

//   return {
//     props: {
//       providers: await getProviders(context),
//       csrfToken: await getCsrfToken(context),
//     },
//   };
// }

