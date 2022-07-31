import { getProviders, signIn } from "next-auth/react"
import Image from 'next/image'

export default function SignIn({ providers }) {
  console.log(providers)
  return (
    <section className="w-screen">
      <div className="flex justify-center content-center my-12">
        <Image src='/images/signin.png' width={150} height={150}/>
      </div>
      {/* <form method="post" action="/api/auth/signin/email">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Email address
          <input type="email" id="email" name="email" />
        </label>
        <button type="submit">Sign in with Email</button>
      </form> */}
      <article className="w-72 sm:w-96 lg:w-[450px] bg-white border-solid border-2 border-indigo-60 mx-auto py-12 px-4">
        <p className="border-b-2 border-indigo-60 leading-[2px] text-center my-6"><span className="bg-white px-2">or sign in with:</span></p>
        <div className="flex justify-evenly pt-6">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)} className='cursor-pointer'>
                {provider.name === 'GitHub' && <Image src={`/images/${provider.name}.png`} width={40} height={40} />}
                {provider.name === 'Google' && <Image src={`/images/${provider.name}.png`} width={110} height={45} />}
              </button>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
