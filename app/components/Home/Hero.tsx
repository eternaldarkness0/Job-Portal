import Image from 'next/image'
import React from 'react'
import HeroImg from '@/public/images/hero.svg'

const Hero = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
        <div className='w-[100%] h-[60vh] flex flex-col items-center justify-center'>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]'>

                {/* text section */}
                <div>
                    <h1
                    className='text-[28px] sm:text-[35px] lg:text-[45px] xl:text-[60px] text-[#05264e] leading-[3rem] lg:leading-[4rem] font-extrabold'
                    >The <span className='text-blue-500'>Easiest Way</span> <br /> To Get Your New Job
                    </h1>
                    <p className='text-[#4f5e64] text-[16px] md:text-[18px] mt-[1rem]'>
                        Each month, more than 3 million job seekers turn to website in their search for work, making over 140 000 applications every single day.
                    </p>

                    {/* search section */}
                    <div className='mt-[1.5rem]'>
                        <input className='w-[60%] md:w-[70%] lg:w-[75%] px-5 py-4 outline-none rounded-l-md bg-gray-200' type="text" placeholder='Search Job'/>
                        <button className='px-5 py-4 outline-none rounded-r-md bg-blue-500 text-white'>Search</button>
                    </div>
                </div>

                {/* image section */}
                <div className='hidden lg:block'>
                    <Image src={HeroImg} alt='hero-image' width={700} height={700}/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero