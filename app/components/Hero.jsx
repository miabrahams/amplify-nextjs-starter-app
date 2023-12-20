import React from 'react'
import Spline from '@splinetool/react-spline';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
    
    <div className='flex max-w-screen-xl mx-auto h-screen'>
      <div className='flex-1 flex flex-col justify-center h-full'>
        <h1 className='text-7xl tracking-tight font-bold text-gray-100'>Kubernetes for <br/>developers</h1>
        <p className='text-xl mt-6 mb-10 w-4/5 text-gray-300'>
          The best visualization tool to monitor and set alerts for your Kubernetes cluster 
          to make sure you identify bugs before they happen.
        </p>
        <div className='flex flex-col justify-center gap-4 md:flex-row md:justify-start'>
          <Link 
            href='/dashboard' 
            className='text-base h-12 pl-5 pr-3 gap-0 font-medium bg-white text-black hover:bg-zinc-200 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-none focus-visible:bg-white/90 disabled:hover:bg-white inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200'>
              Get started
            <div className='pl-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </Link>
          <Link 
            href='/docs/introduction'
            className='text-base h-12 pl-5 pr-3 gap-0 font-medium bg-slate-1 border-slate-1 text-slate-11 hover:bg-slate-5 hover:text-slate-300 hover:border-slate-5 focus-visible:ring-4 focus-visible:ring-slate-7 focus-visible:outline-none focus-visible:bg-slate-6 disabled:hover:bg-slate-1 inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200'>
            Documentation
            <div className='pl-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className='flex-1'>
        <Spline scene="https://prod.spline.design/Nx9pROo5dwu-91F6/scene.splinecode" />
      </div>
    </div>
    <div className='flex flex-col animate-hero-text-slide-up-fade items-center justify-center gap-2 text-center -mt-40'>
      <h5 className='sans text-sm leading-[1.6] text-slate-11 font-normal'>
        Backed by
      </h5>
      <div className='w-36'>
          <img
            src='//images.squarespace-cdn.com/content/v1/63939ff270e73b58af16e77b/ad1661b6-9ebb-4eff-9fd9-045c7b06f816/%28RGB%29OSLabs-hor-logo-white-writing.png?format=105w'
            alt='OSLabs Logo'
            className='w-full h-full'
          />
      </div>
    </div>

    </>
  )
}

export default Hero
