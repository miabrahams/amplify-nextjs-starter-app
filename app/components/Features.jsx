import React from 'react';
import Image from 'next/image';
import Video from 'next-video';
import Mitch from '../videos/mitch.mp4'

const Features = () => {
  return (
    <div className='mt-36'>
      <p className='text-center font-bold text-4xl px-10'>Features</p>

      <div className='bg-gray-900 text-indigo-300 p-4 m-2 overflow-auto'>
        <pre className='font-mono text-base leading-6 whitespace-pre'>
          This is a markdown file <br/>
          npm do whatever
        </pre>
      </div>



      <div className='feature-card flex flex-col md:flex-row justify-center align-center mt-24'>
        <div className='md:w-1/2 flex flex-col justify-center items-center'>
          <p className='font-bold'>Pod view</p>
          <p className='flex-wrap'>
            See all details of your pods.
          </p>
        </div>
        <div className='md:w-1/2'>
          <Video
            src={Mitch}
            type="video/mp4"
            width={600}
            height={600}
            alt="Picture of mitch"
          />
        </div>
      </div>
      <div className='feature-card flex flex-col md:flex-row justify-center align-center mt-24'>
        <div className='md:w-1/2'>
          <Video
            src={Mitch}
            type="video/mp4"
            width={600}
            height={600}
            alt="Picture of mitch"
          />
        </div>
        <div className='md:w-1/2 flex flex-col justify-center items-center'>
          <p className='font-bold'>Pod view</p>
          <p className='flex-wrap'>
            See all details of your pods!
          </p>
        </div>
      </div>

      <div className='feature-card flex flex-col md:flex-row justify-center align-center mt-24'>
        <div className='md:w-1/2 flex flex-col justify-center items-center'>
          <p className='font-bold'>Pod view</p>
          <p className='flex-wrap'>
            See all details of your pods!
          </p>
        </div>
        <div className='md:w-1/2'>
          <Video
            src={Mitch}
            type="video/mp4"
            width={600}
            height={600}
            alt="Picture of mitch"
          />
        </div>
      </div>

    </div>
  )
}

export default Features
