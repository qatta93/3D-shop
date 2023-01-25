import type { NextPage } from 'next'
import { ItemCard } from '../src/components/ItemCard'
import { Animation } from '../src/components/Animation'
import furniture from "../public/api/furniture.json"
import { FurnitureProps } from '../src/components/types/index'


const Home: NextPage = () => {

  return (
    <div className='w-screen h-full relative'>
      <main className='h-full flex-1'>
        <Animation/>
        <div className='py-12'>
          <h1 className='text-3xl md:text-4xl xl:text-5xl my-6 md:my-12 xl:mb-24 text-zinc-600 text-center'>Products:</h1>
          <div className='w-full flex flex-col xl:flex-row xl:flex-wrap justify-center items-center'>
            {furniture.map((item:FurnitureProps) => <ItemCard key={item.id} item={item}/>)}
          </div>
        </div>  
      </main>
    </div>
  )
}

export default Home
