import React from 'react'
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-[#111]'>
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white/10'>
            <div>
                <h1 className='text-[24px] text-white mb-[1rem] font-bold uppercase'>Jobify</h1>
                <p className='text-[14px] text-white/70'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, aperiam minima. Modi ratione saepe placeat.
                </p>

                <div className='mt-[1.5rem] flex items-center space-x-3'>
                    <div className='w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col'>
                        <FaYoutube className='text-white'/>
                    </div>

                    <div className='w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col'>
                        <FaFacebookF className='text-white'/>
                    </div>

                    <div className='w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center justify-center flex-col'>
                        <FaInstagram className='text-white'/>
                    </div>

                    <div className='w-[2.4rem] h-[2.4rem] bg-gray-700 rounded-full flex items-center justify-center flex-col'>
                        <FaXTwitter className='text-white'/>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-white text-[22px] w-fit font-semibold mb-[1.5rem]'>About Us</h1>
                <p className='text-[15px] w-fit text-white/50 hover:text-yellow-300 cursor-pointer mb-[0.7rem]'>Job</p>
                <p className='text-[15px] w-fit text-white/50 hover:text-yellow-300 cursor-pointer mb-[0.7rem]'>Privacy</p>
                <p className='text-[15px] w-fit text-white/50 hover:text-yellow-300 cursor-pointer mb-[0.7rem]'>Application</p>
                <p className='text-[15px] w-fit text-white/50 hover:text-yellow-300 cursor-pointer mb-[0.7rem]'>Candidates</p>
            </div>

            <div>
                <h1 className='text-white text-[22px] w-fit font-semibold mb-[1.5rem]'>Quick Link</h1>
                <p className='text-[15px] w-fit text-white/50 hover:text-yellow-300 cursor-pointer mb-[0.7rem]'>All Job</p>
                <p className='text-[15px] w-fit text-white/50 hover:text-yellow-300 cursor-pointer mb-[0.7rem]'>Job Details</p>
                <p className='text-[15px] w-fit text-white/50 hover:text-yellow-300 cursor-pointer mb-[0.7rem]'>How to Apply</p>
                <p className='text-[15px] w-fit text-white/50 hover:text-yellow-300 cursor-pointer mb-[0.7rem]'>Resume</p>
            </div>

            <div>
                <h1 className='text-white text-[22px] w-fit font-semibold mb-[1.5rem]'>Get in Touch</h1>
                <p className='text-[15px] w-fit text-white/50 hover:text-yellow-300 cursor-pointer mb-[0.7rem]'>+123 456 789</p>
                <p className='text-[15px] w-fit text-white/50 hover:text-yellow-300 cursor-pointer mb-[0.7rem]'>example@gmail.com</p>
                <p className='text-[15px] w-fit text-white/50 hover:text-yellow-300 cursor-pointer mb-[0.7rem]'>New York, USA</p>
            </div>
        </div>
    </div>
  )
}

export default Footer