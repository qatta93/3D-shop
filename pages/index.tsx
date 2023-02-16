import Button from '@/components/button'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image';
import FurnitureTypes from '@/components/furnitureTypes';

const Home: NextPage = () => {

  return (
    <div className='h-full px-[20px] sm:px-[40px] overflow-scroll'>
      <section className='flex flex-col sm:flex-row items-center text-center sm:text-left pt-[60px]'>
        <div>
          <h4 className='font-changa-one max-w-[300px] sm:text-[42px]'>Furniture for a better everyday life.</h4>
          <p className='pt-[31px] pb-[45px] max-w-[300px] text-base font-light'>Have a look on our 3D models and find your perfect match!</p>
          <Link href={'/products'}>
            <Button
              variant={'primary'}
              className={'uppercase'}
              size={'sm'}>
              see 3d models
            </Button>
          </Link>
        </div>
        <div className='relative h-[300px] w-[300px] mt-[100px] mx-auto'>
          <div className='relative h-[200px] w-[250px] mx-auto'>
            <Image src="/images/bcg-yellow.png" alt="bcg"  layout='fill' className="absolute"/>
          </div>
          <Image src="/images/chair-main.png" alt="chair"  layout='fill' className="absolute"/>
        </div>
      </section>
      <section className='w-full px-4 grid grid-cols-1 gap-12 mb-16 mt-14 bg-primary-bcg bg-no-repeat bg-cover'>
        <h4 className='text-center mb-[12px]'>PRODUCTS</h4>
        <FurnitureTypes/>
      </section>
    </div>
  )
}

export default Home
