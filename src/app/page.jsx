'use client'
import About from '@/components/About'
import Banner from '@/components/Banner'
import Contact from '@/components/Contact'
import Courses from '@/components/Courses'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Numbers from '@/components/Numbers'
import Teatchers from '@/components/Teatchers'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Numbers />
      <About />
      {/* <Hero /> */}
      <Features />
      <Courses />
      <Teatchers />
      <Contact />
      <Footer />
    </>
  )
}
