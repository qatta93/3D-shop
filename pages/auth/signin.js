// import { EmailForm } from "@/components/EmailForm";
// import { getProviders, signIn, getSession , getCsrfToken } from "next-auth/react"
// import { Navigation } from '@/components/Navigation';
// import Image from 'next/image'
// import Link from 'next/link'

// const SignIn = ({ providers, csrfToken }) => {

//   const externalProviders = Object.values(providers).filter(provider => provider.name !== "credentials" || provider.name !== "email");

//   return (
//     <>
//     <Navigation/>
//     <h1 className='bg-emerald-200 py-4 text-center text-zinc-600 font-semibold uppercase text-lg'>login</h1>
//     <section className="w-screen pb-20">
//       <div className="flex justify-center content-center my-12">
//         <Image src='/images/signin.png' width={150} height={150} alt='signin'/>
//       </div>
//       <article className="w-72 sm:w-96 lg:w-[450px] bg-white border-solid border-2 border-indigo-60 mx-auto py-12 px-4">
//         <EmailForm csrfToken={csrfToken}/>
//         <p className="text-center mb-12 text-slate-400">Do not have an account? <Link href={'/auth/register'}><span className="font-bold cursor-pointer">Register</span></Link></p>
//         <p className="border-b-2 border-indigo-60 leading-[2px] text-center my-6"><span className="bg-white px-2 text-slate-500">or sign in with:</span></p>
//         <div className="flex justify-evenly pt-6">
//           {Object.values(externalProviders).map((provider) => (
//             <div key={provider.name}>
//               <button onClick={() => signIn(provider.id)} className='cursor-pointer'>
//                 {provider.name === 'GitHub' && <Image src={`/images/github.png`} width={40} height={40} alt="github"/>}
//                 {provider.name === 'Google' && <Image src={`/images/google.png`} width={110} height={45} alt="google"/>}
//               </button>
//             </div>
//           ))}
//         </div>
//       </article>
//     </section>
//     </>
//   )
// }

// export default SignIn;

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

