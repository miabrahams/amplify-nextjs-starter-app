'use client'
import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import Hero from './components/Hero'
import Team from './components/Team'
import Features from './components/Features'
import Title from './components/Title'


export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <Title/>
      <Features />
      <Team/>
    </main>
    </>
  )
}
