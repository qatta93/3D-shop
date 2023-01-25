import Image from 'next/image'
import { Navigation } from '@/components/Navigation'; 
import {RegisterForm} from '@components/RegisterForm'

const Register = () => {
  return (
    <>
      <Navigation/>
      <h1 className='bg-emerald-200 py-4 text-center text-zinc-600 font-semibold uppercase text-lg'>register</h1>
      <section className="w-screen pb-20">
        <div className="flex justify-center content-center my-12">
          <Image src='/images/signin.png' width={150} height={150}/>
        </div>
        <article className="w-72 sm:w-96 lg:w-[450px] bg-white border-solid border-2 border-indigo-60 mx-auto py-12 px-4">
          <RegisterForm/>
        </article>
      </section>
    </>
  )
}

export default Register;
