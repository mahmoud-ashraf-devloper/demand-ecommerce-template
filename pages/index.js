import Head from 'next/head'
import Image from 'next/image'
import Features from '../components/Features'
import HomeSection from '../components/Home/HomeSection'
import Categories from './../components/Categories';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
          <HomeSection />
          <Features />
          <Categories />
      </main>
    </div>
  )
}