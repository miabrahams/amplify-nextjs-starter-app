import React from 'react'

const Title = () => {
  return (
    <>
    <section>
    <div className='mx-auto px-4 py-12 sm:py-24 max-w-5xl md:max-w-7xl'>
      <h2 className='font-book font-styling font-display mb-3 text-center md:text-left text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-gradient'>
        Great UI for Developers
      </h2>
      <div className='w-4/5'>
        <p className='text-lg text-gray-200 mt-4'>
          We are dedicated to creating the next-generation Kubernetes visualization tool <br/>
          to help you proactively solve issues and ensure the stability of your applications.
        </p>
        <p className='text-lg text-gray-200 mt-4'>
          Imagine having the ability to monitor your clusters and receive real-time alerts <br/>
          on your mobile device when problems arise.
        </p>
      </div>
    </div>

      <div className='text-center mt-20 flex flex-col'>
        <p className='text-6xl mb-10 font-bold text-blue-400 hover:text-blue-600 transition-colors'>
          Introducing KUBE SENTRY
        </p>
        <p className='text-lg text-blue-400 hover:text-blue-600 transition-colors'>
          An Easy-to-use Kubernetes Visualizer tool
        </p>
        <p className='text-lg text-blue-400 hover:text-blue-600 transition-colors'>
          Monitor your pods NOW!
        </p>
      </div>
    </section>
    
    </>
    
  )
}

export default Title
