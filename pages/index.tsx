import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Subscribe from '../components/btnSubscribe'

const Home: NextPage = () => {
  return (
    <main className='max-w-4xl mx-auto' >
      <Head>
        <title>Ig-News | Home</title>
      </Head>

      <div className="columns-1 md:columns-2 mt-24">
        <div className='p-2'>
          <h2 className='text-xl'>🖐 Hey, welcome</h2>
          <h1 className=' font-extrabold text-4xl mt-5'>News about</h1>
          <h1 className='font-extrabold text-4xl mt-5'> the <span className='text-cyan-400'>React</span> world</h1>
          <p className='mt-5 text-lg'>
            Get acess to all the publications
          </p>
          <span className='text-cyan-400 font-bold text-xl'> for $9,90 month</span>

          <Subscribe />
        </div>
        <div>
          <Image src='/Mulher.svg' width={500} height={500} />
        </div>
      </div>
    </main >
  )
}

export default Home
